import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Timespan } from './Timespan/Timespan';
import { CircleNavigation } from './CircleNavigation/CircleNavigation';
import { SliderNavigation } from './SliderNavigation/SliderNavigation';
import { SectionContent } from '@/styles/GlobalStyle';
import { AppSlider } from '../AppSlider/AppSlider';
import { useState } from 'react';

export const HistoricalDatesBlock = ({ data }: { data: any }) => {
  const [currentPointIndex, setCurrentPointIndex] = useState<number>(+data[0].id);

  const sliderData = data[currentPointIndex].details;

  return (
    <>
      <SectionTitle title='Исторические даты' />
      <Timespan
        startYear={data[0].timespan.start}
        lastYear={data[0].timespan.last}
      />
      <CircleNavigation />

      <SectionContent>
        <SliderNavigation />

        <AppSlider
          sliderData={sliderData}
          isMobile={false}
        />
      </SectionContent>
    </>
  );
};
