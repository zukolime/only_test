import { useState } from 'react';

export const useHistoricalSlider = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateState = (s: any) => {
    setActiveIndex(s.activeIndex);
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
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
