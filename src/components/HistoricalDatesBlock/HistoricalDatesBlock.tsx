import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Timespan } from './Timespan/Timespan';
import { CircleNavigation } from './CircleNavigation/CircleNavigation';
import { SliderNavigation } from './SliderNavigation/SliderNavigation';
import { AppSlider } from '../AppSlider/AppSlider';

import { useHistoricalSlider } from '@/hooks/useHistoricalSlider';

import { SectionContent } from '@/styles/GlobalStyle';
import 'swiper/css';
import {
  HistoricalDatesBlockWrapper,
  SlideScene,
} from './HistoricalDatesBlock.styled';

export const HistoricalDatesBlock = ({ data }: { data: any }) => {
  const { setSwiper, activeIndex, onSlideChange, slideTo, next, prev } =
    useHistoricalSlider();

  return (
    <>
      <SectionTitle title='Исторические даты' />

      <HistoricalDatesBlockWrapper>
        <Swiper
          className='historical-swiper'
          modules={[Navigation]}
          slidesPerView={1}
          allowTouchMove
          onSwiper={setSwiper}
          onSlideChange={onSlideChange}
        >
          {data.map((item: any, index: any) => (
            <SwiperSlide key={item.id}>
              <Timespan
                startYear={item.timespan.start}
                lastYear={item.timespan.last}
              />

              <CircleNavigation
                activeIndex={activeIndex}
                onSelect={slideTo}
              />

              <SectionContent>
                <SliderNavigation
                  current={activeIndex + 1}
                  total={data.length}
                  onPrev={prev}
                  onNext={next}
                />

                <AppSlider
                  sliderData={item.details}
                  isMobile={false}
                />
              </SectionContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </HistoricalDatesBlockWrapper>
    </>
  );
};
