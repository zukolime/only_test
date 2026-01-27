import { TimespanWrapper, Year } from './Timespan.styled';

interface TimespanProps {
  startYear: number;
  lastYear: number;
}

export const Timespan = ({ startYear, lastYear }: TimespanProps) => {
  return (
    <TimespanWrapper>
      <Year>{startYear}</Year>
      <Year>{lastYear}</Year>
    </TimespanWrapper>
  );
};
