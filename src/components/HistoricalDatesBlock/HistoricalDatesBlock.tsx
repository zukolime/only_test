import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Timespan } from './Timespan/Timespan';
import { CircleNavigation } from './CircleNavigation/CircleNavigation';
import { SliderNavigation } from './SliderNavigation/SliderNavigation';
import { AppSlider } from '../AppSlider/AppSlider';
import { isMobile } from '@/utils/isMobile';

import { useHistoricalSlider } from '@/hooks/useHistoricalSlider';

import { SectionContent } from '@/styles/GlobalStyle';
import 'swiper/css';
import { HistoricalDatesBlockWrapper } from './HistoricalDatesBlock.styled';

export const HistoricalDatesBlock = ({ data }: { data: any }) => {
  const { setSwiper, activeIndex, onSlideChange, slideTo, next, prev, isBeginning, isEnd } =
    useHistoricalSlider();

  return (
    <>
      <SectionTitle title='Исторические даты' />

      <HistoricalDatesBlockWrapper>
        <Swiper
          speed={0}
          className='historical-swiper'
          modules={[Navigation]}
          slidesPerView={1}
          allowTouchMove={false}
          onSwiper={setSwiper}
          onSlideChange={onSlideChange}
        >
          {data.map((item: any) => (
            <SwiperSlide key={item.id}>
              <Timespan
                startYear={data[activeIndex].timespan.start}
                endYear={data[activeIndex].timespan.end}
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
                  isBeginning={isBeginning}
                  isEnd={isEnd}
                />

                <AppSlider
                  key={activeIndex}
                  sliderData={item.details}
                  isMobile={isMobile()}
                />
              </SectionContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </HistoricalDatesBlockWrapper>
    </>
  );
};
