import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';

export const useSlider = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateState = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return {
    swiper,

    activeIndex,
    isBeginning,
    isEnd,

    setSwiper,

    onSlideChange: updateState,

    slideTo: (index: number) => swiper?.slideTo(index),
    next: () => swiper?.slideNext(),
    prev: () => swiper?.slidePrev(),
  };
};
