import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Timespan } from './Timespan/Timespan';
import { CircleNavigation } from './CircleNavigation/CircleNavigation';
import { SliderNavigation } from './SliderNavigation/SliderNavigation';
import { CardSlider } from './CardSlider/CardSlider';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useSlider } from '@/hooks/useSlider';
import { DataItem } from '@/types';

import { HistoricalDatesBlockWrapper, SliderLabel } from './HistoricalDatesBlock.styled';
import 'swiper/css';
import 'swiper/css/pagination';

export const HistoricalDatesBlock = ({ data }: { data: DataItem[] }) => {
  const { setSwiper, activeIndex, updateState, slideTo, next, prev, isBeginning, isEnd } = useSlider();

  const isMobileView = useIsMobile();

  return (
    <>
      <HistoricalDatesBlockWrapper>
        <SectionTitle title='Исторические даты' />

        <Swiper
          speed={0}
          className='historical-swiper'
          modules={[Pagination]}
          slidesPerView={1}
          allowTouchMove={false}
          pagination={{ clickable: true }}
          onSwiper={setSwiper}
          onSlideChange={updateState}
          updateOnWindowResize>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </HistoricalDatesBlockWrapper>
    </>
  );
};
