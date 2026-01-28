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
  const total = data.length;
  const angleStep = 360 / total;

  return (
    <CircleContainer>
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
