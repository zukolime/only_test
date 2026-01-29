import { useEffect, useRef } from 'react';

import { animateCircleRotation } from '@/utils/gsapAnimations';
import { getRotationAngle } from '@/utils/getRotationAngle';

import { CircleContainer, PointButton, PointLabel, PointNumber } from './CircleNavigation.styled';

interface CircleNavigationItem {
  id: string | number;
  label: string;
}

interface CircleNavigationProps {
  items: CircleNavigationItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const CircleNavigation = ({ items, activeIndex, onSelect }: CircleNavigationProps) => {
  const circleRef = useRef<HTMLDivElement>(null);

  const total = items.length;
  const angleStep = 360 / total;

  useEffect(() => {
    if (!circleRef.current || total === 0) return;

    const rotation = getRotationAngle(activeIndex, angleStep);
    animateCircleRotation(circleRef.current, rotation);
  }, [activeIndex, angleStep, total]);

  const renderPoints = items.map((item, index) => (
    <PointButton
      key={item.id}
      onClick={() => onSelect(index)}
      $isActive={index === activeIndex}
      style={
        {
          '--angle': `${index * angleStep}deg`,
        } as React.CSSProperties
      }
    >
      <PointNumber $isActive={index === activeIndex}>{index + 1}</PointNumber>
      <PointLabel $isActive={index === activeIndex}>{item.label}</PointLabel>
    </PointButton>
  ));

  return <CircleContainer ref={circleRef}>{renderPoints}</CircleContainer>;
};
