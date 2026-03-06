import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useSlider } from '@/hooks/useSlider';
import { DetailItem } from '@/types';
import { animateFadeIn } from '@/utils/gsapAnimations';

import { SlideDesciption, SliderWrapper, SlideTitle, NavigationButton, ButtonsWrapper, SliderContainer } from './CardSlider.styled';

import 'swiper/css';
import ArrowIcon from '@/assets/icons/arrow.svg';

interface SliderProps {
  sliderDetails: DetailItem[];
}

export const CardSlider = ({ sliderDetails }: SliderProps) => {
  const { setSwiper, updateState, isBeginning, isEnd } = useSlider();

  const isMobileView = useIsMobile();

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    animateFadeIn(sliderRef.current);
  }, [sliderDetails]);

  const breakpoints = {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 80,
      freeMode: false,
      grabCursor: true,
    },
  };

  return (
    <SliderContainer
      $hasLeftButton={!isBeginning}
      $isMobile={isMobileView}>
      <SliderWrapper ref={sliderRef}>
        <Swiper
          className='cards-swiper'
          modules={[Navigation]}
          freeMode={isMobileView}
          grabCursor={!isMobileView}
          breakpoints={breakpoints}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={setSwiper}
          onSlideChange={updateState}
          autoHeight
          updateOnWindowResize>
          {sliderDetails.map((item) => (
            <SwiperSlide key={item.year}>
              <SlideTitle>{item.year}</SlideTitle>
              <SlideDesciption>{item.description}</SlideDesciption>
            </SwiperSlide>
          ))}
        </Swiper>

        <ButtonsWrapper>
          <NavigationButton
            ref={prevRef}
            $isHidden={isBeginning}
            aria-label='Предыдущий слайд'>
            <ArrowIcon
              width={6}
              height={12}
            />
          </NavigationButton>

          <NavigationButton
            ref={nextRef}
            $isHidden={isEnd}
            $isNext
            aria-label='Следующий слайд'>
            <ArrowIcon
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
