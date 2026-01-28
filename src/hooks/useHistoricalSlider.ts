import { useState } from 'react';

export const useHistoricalSlider = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return {
    swiper,
    activeIndex,
    setSwiper,
    onSlideChange: (s: any) => setActiveIndex(s.activeIndex),
    slideTo: (index: number) => swiper?.slideTo(index),
    next: () => swiper?.slideNext(),
    prev: () => swiper?.slidePrev(),
  };
};
