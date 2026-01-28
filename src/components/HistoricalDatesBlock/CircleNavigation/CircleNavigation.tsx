import { data } from '@/data/data';
import {
  CircleContainer,
  PointButton,
  PointLabel,
  PointNumber,
} from './CircleNavigation.styled';

export const CircleNavigation = () => {
  return (
    <CircleContainer>
      {data.map((item) => (
        <PointButton
          data-index={item.id}
          key={item.id}
        >
          <PointNumber>{+item.id + 1}</PointNumber>
          <PointLabel>{item.label}</PointLabel>
        </PointButton>
      ))}
    </CircleContainer>
  );
};
