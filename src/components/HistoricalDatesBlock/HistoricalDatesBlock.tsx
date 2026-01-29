import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Timespan } from './Timespan/Timespan';
import { CircleNavigation } from './CircleNavigation/CircleNavigation';
import { SliderNavigation } from './SliderNavigation/SliderNavigation';
import { AppSlider } from '../AppSlider/AppSlider';

import { useHistoricalSlider } from '@/hooks/useHistoricalSlider';

import 'swiper/css';
import {
  BottomContentWrapper,
  HistoricalDatesBlockWrapper,
  SliderLabel,
} from './HistoricalDatesBlock.styled';
import { useIsMobile } from '@/hooks/useIsMobile';

export const HistoricalDatesBlock = ({ data }: { data: any }) => {
  const {
    setSwiper,
    activeIndex,
    onSlideChange,
    slideTo,
    next,
    prev,
    isBeginning,
    isEnd,
  } = useHistoricalSlider();

  const isMobileView = useIsMobile();

  return (
    <>
      <HistoricalDatesBlockWrapper>
        <SectionTitle title='Исторические даты' />

        <Swiper
          speed={0}
          className='historical-swiper'
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          allowTouchMove={false}
          pagination={{ clickable: isMobileView ? true : false }}
          onSwiper={setSwiper}
          onSlideChange={onSlideChange}
        >
          {data.map((item: any) => (
            <SwiperSlide key={item.id}>
              <Timespan
                startYear={data[activeIndex].timespan.start}
                endYear={data[activeIndex].timespan.end}
              />

              {isMobileView ? (
                <SliderLabel>{data[activeIndex].label}</SliderLabel>
              ) : (
                <CircleNavigation
                  activeIndex={activeIndex}
                  onSelect={slideTo}
                />
              )}

              <BottomContentWrapper>
                <SliderNavigation
                  current={activeIndex + 1}
                  total={data.length}
                  onPrev={prev}
                  onNext={next}
                  isBeginning={isBeginning}
                  isEnd={isEnd}
                />

                <AppSlider
                  key={activeIndex}
                  sliderData={item.details}
                />
              </BottomContentWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </HistoricalDatesBlockWrapper>
    </>
  );
};
