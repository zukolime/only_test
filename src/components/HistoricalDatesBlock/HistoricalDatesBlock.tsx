import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Timespan } from './Timespan/Timespan';

export const HistoricalDatesBlock = ({ data }: { data: any }) => {
  return (
    <>
      <SectionTitle title='Исторические даты' />
      <Timespan
        startYear={data[0].timespan.start}
        lastYear={data[0].timespan.last}
      ></Timespan>
    </>
  );
};
