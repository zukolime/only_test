import { data } from '@/data/data';
import { PointButton, PointNumber, PointLabel } from './Points.styled';

interface PointsProps {
  id: string;
  label: string;
}

export const Points = () => {
  return (
    <>
      {data.map((item) => (
        <PointButton
          data-index={item.id}
          key={item.id}
        >
          <PointNumber>{+item.id + 1}</PointNumber>
          <PointLabel>{item.label}</PointLabel>
        </PointButton>
      ))}
    </>
  );
};
