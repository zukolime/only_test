import { gsap } from 'gsap';

import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import {
  SlideDesciption,
  SliderWrapper,
  SlideTitle,
  NavigationButton,
  ButtonsWrapper,
  SliderContainer,
} from './AppSlider.styled';

import ArrowIcon from '@/assets/icons/arrow.svg';

import 'swiper/css';
import { useIsMobile } from '@/hooks/useIsMobile';

interface SlideData {
  id: string;
  year: number;
  description: string;
}

interface SliderProps {
  sliderData: SlideData[];
}

export const AppSlider = ({ sliderData }: SliderProps) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const isMobileView = useIsMobile();

  useEffect(() => {
    if (swiperInstance) {
      const updateNavigation = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      };

      swiperInstance.on('slideChange', updateNavigation);
      updateNavigation();

      return () => {
        if (swiperInstance) {
          swiperInstance.off('slideChange', updateNavigation);
        }
      };
    }
  }, [swiperInstance]);

  useEffect(() => {
    if (!sliderRef.current) return;

    gsap.fromTo(
      sliderRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
      },
    );
  }, [sliderData]);

  const breakpoints = {
    1350: {
      slidesPerView: 3,
      spaceBetween: 80,
      freeMode: false,
      grabCursor: true,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  };

  return (
    <SliderContainer
      $hasLeftButton={!isBeginning}
      $isMobile={isMobileView}
    >
      <SliderWrapper ref={sliderRef}>
        <Swiper
          key={isMobileView ? 'mobile' : 'desktop'}
          className='cards-swiper'
          slidesPerView={isMobileView ? 1.5 : 3}
          spaceBetween={isMobileView ? 20 : 80}
          freeMode={isMobileView}
          grabCursor={!isMobileView}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={setSwiperInstance}
          breakpoints={breakpoints}
        >
          {sliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <SlideTitle>{item.year}</SlideTitle>
              <SlideDesciption>{item.description}</SlideDesciption>
            </SwiperSlide>
          ))}
        </Swiper>

        <ButtonsWrapper>
          <NavigationButton
            ref={prevRef}
            $isHidden={isBeginning}
            aria-label='Предыдущий слайд'
          >
            <ArrowIcon
              name='arrow-left'
              width={6}
              height={12}
            />
          </NavigationButton>
          <NavigationButton
            ref={nextRef}
            $isHidden={isEnd}
            $isNext
            aria-label='Следующий слайд'
          >
            <ArrowIcon
              name='arrow-right'
              width={6}
              height={12}
              style={{ transform: 'rotate(180deg)' }}
            />
          </NavigationButton>
        </ButtonsWrapper>
      </SliderWrapper>
    </SliderContainer>
  );
};
