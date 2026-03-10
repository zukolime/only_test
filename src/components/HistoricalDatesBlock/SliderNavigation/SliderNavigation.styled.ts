import { colors } from '@/styles/colors';
import styled from 'styled-components';

export const SliderNavigationWrapper = styled.div`
  width: 100%;
  grid-row: 2;
  grid-column: 2 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  gap: 20px;
  font-weight: 400;
  font-size: 14px;

  @media (max-width: 770px) {
    grid-row: 4;
    grid-column: 1 / -1;
  }
`;

export const SliderNavigationCounter = styled.span``;

export const SliderNavigationArrows = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 770px) {
    gap: 9px;
  }
`;

export const SliderNavigationArrow = styled.button<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 18px;
  border: 1px solid ${colors.primary};
  border-radius: 100%;
  transition: opacity 0.2s;

  opacity: ${({ $disabled }) => ($disabled ? 0.3 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 0.3 : 0.7)};
  }

  @media (max-width: 770px) {
    width: 25px;
    height: 25px;
    padding: 9px;
  }
`;

export const SliderNavigationDots = styled.div``;
