import { useEffect, useRef } from 'react';
import gsap from 'gsap';
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
      gsap.fromTo(
        startRef.current,
        { innerText: prevStart.current },
        {
          innerText: startYear,
          duration: 1.5,
          ease: 'power2.in',
          snap: { innerText: 1 },
        },
      );
      prevStart.current = startYear;
    }

    if (endRef.current) {
      gsap.fromTo(
        endRef.current,
        { innerText: prevEnd.current },
        {
          innerText: endYear,
          duration: 1.5,
          ease: 'power2.in',
          snap: { innerText: 1 },
        },
      );
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
