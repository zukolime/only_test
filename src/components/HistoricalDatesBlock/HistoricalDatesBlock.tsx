import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Timespan } from './Timespan/Timespan';
import { CircleNavigation } from './CircleNavigation/CircleNavigation';
import { SliderNavigation } from './SliderNavigation/SliderNavigation';
import { CardSlider } from '../CardSlider/CardSlider';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useSlider } from '@/hooks/useSlider';
import { DataItem } from '@/types';

import { BottomContentWrapper, HistoricalDatesBlockWrapper, SliderLabel } from './HistoricalDatesBlock.styled';
import 'swiper/css';
import 'swiper/css/pagination';

export const HistoricalDatesBlock = ({ data }: { data: DataItem[] }) => {
  const { setSwiper, activeIndex, onSlideChange, slideTo, next, prev, isBeginning, isEnd } = useSlider();

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
          {data.map((item: DataItem) => (
            <SwiperSlide key={item.id}>
              <Timespan
                startYear={data[activeIndex].timespan.start}
                endYear={data[activeIndex].timespan.end}
              />

              {isMobileView ? (
                <SliderLabel>{data[activeIndex].label}</SliderLabel>
              ) : (
                <CircleNavigation
                  items={data}
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

                <CardSlider
                  key={activeIndex}
                  sliderDetails={item.details}
                />
              </BottomContentWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </HistoricalDatesBlockWrapper>
    </>
  );
};
