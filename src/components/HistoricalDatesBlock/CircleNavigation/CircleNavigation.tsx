import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { data } from '@/data/data';
import {
  CircleContainer,
  PointButton,
  PointLabel,
  PointNumber,
} from './CircleNavigation.styled';

interface CircleNavigationProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const CircleNavigation = ({
  activeIndex,
  onSelect,
}: CircleNavigationProps) => {
  const circleRef = useRef<HTMLDivElement>(null);

  const total = data.length;
  const angleStep = 360 / total;

  useEffect(() => {
    if (!circleRef.current) return;

    const angleStep = 360 / total;
    const TARGET_INDEX = 4;
    const targetAngle = TARGET_INDEX * angleStep;

    const rotation = targetAngle - activeIndex * angleStep;

    gsap.to(circleRef.current, {
      rotate: rotation,
      duration: 1,
      ease: 'power2.out',
      onUpdate() {
        circleRef.current?.style.setProperty('--circle-rotation', `${rotation}deg`);
      },
    });
  }, [activeIndex, total]);

  return (
    <CircleContainer ref={circleRef}>
      {data.map((item, index) => (
        <PointButton
          key={item.id}
          onClick={() => onSelect(index)}
          $isActive={index === activeIndex}
          style={
            {
              '--angle': `${index * angleStep}deg`,
            } as React.CSSProperties
          }
          data-active={index === activeIndex}
        >
          <PointNumber $isActive={index === activeIndex}>{index + 1}</PointNumber>
          <PointLabel $isActive={index === activeIndex}>{item.label}</PointLabel>
        </PointButton>
      ))}
    </CircleContainer>
  );
};
