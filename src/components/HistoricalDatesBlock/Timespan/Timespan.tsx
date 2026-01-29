import { useEffect, useRef } from 'react';

import { animateYearChange } from '@/utils/gsapAnimations';

import { TimespanWrapper, Year } from './Timespan.styled';

interface TimespanProps {
  startYear: number;
  endYear: number;
}

export const Timespan = ({ startYear, endYear }: TimespanProps) => {
  const startRef = useRef<HTMLSpanElement>(null);
  const endRef = useRef<HTMLSpanElement>(null);

  const prevStart = useRef(startYear);
  const prevEnd = useRef(endYear);

  useEffect(() => {
    if (startRef.current) {
      animateYearChange(startRef.current, prevStart.current, startYear);
      prevStart.current = startYear;
    }

    if (endRef.current) {
      animateYearChange(endRef.current, prevEnd.current, endYear);
      prevEnd.current = endYear;
    }
  }, [startYear, endYear]);

  return (
    <TimespanWrapper>
      <Year ref={startRef}>{startYear}</Year>
      <Year ref={endRef}>{endYear}</Year>
    </TimespanWrapper>
  );
};
