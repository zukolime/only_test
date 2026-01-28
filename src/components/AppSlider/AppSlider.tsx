import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
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
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SlideData {
  year: number;
  description: string;
}

interface SliderProps {
  sliderData: SlideData[];
  isMobile: boolean;
}

export const AppSlider = ({ sliderData, isMobile }: SliderProps) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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

  return (
    <SliderContainer $hasLeftButton={!isBeginning}>
      <SliderWrapper>
        <Swiper
          slidesPerView={isMobile ? 2 : 3}
          spaceBetween={isMobile ? 20 : 80}
          freeMode={isMobile}
          grabCursor={!isMobile}
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={setSwiperInstance}
          className='swiper'
        >
          {sliderData.map((item) => (
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
            aria-label='Previous slide'
          >
            <ArrowIcon name='arrow-left' />
          </NavigationButton>
          <NavigationButton
            ref={nextRef}
            $isHidden={isEnd}
            $isNext
            aria-label='Next slide'
          >
            <ArrowIcon
              name='arrow-right'
              style={{ transform: 'rotate(180deg)' }}
            />
          </NavigationButton>
        </ButtonsWrapper>
      </SliderWrapper>
    </SliderContainer>
  );
};
