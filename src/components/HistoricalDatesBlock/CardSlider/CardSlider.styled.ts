import { colors } from '@/styles/colors';
import styled from 'styled-components';

export const SliderContainer = styled.div<{
  $hasLeftButton?: boolean;
}>`
  grid-row: 3;
  grid-column: 2 / -1;
  position: relative;
  width: 100%;
  height: 170px;
  display: flex;
  align-items: flex-start;
  justify-content: ${({ $hasLeftButton }) => ($hasLeftButton ? 'center' : 'flex-start')};
  transform: translateY(-10%);

  @media (max-width: 770px) {
    grid-column: 1 / -1;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  max-width: calc(100% - 80px);
  padding-right: 20px;

  @media (max-width: 770px) {
    max-width: 100%;

    padding-right: 0;
  }

  @media (max-height: 620px) {
    padding-top: 25px;
  }
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const NavigationButton = styled.button<{
  $isHidden?: boolean;
  $isNext?: boolean;
}>`
  position: absolute;
  z-index: 11;

  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background: transparent;
  box-shadow: 0 0 15px 0 rgba(56, 119, 238, 0.1);
  border-radius: 100%;
  border: none;

  cursor: pointer;
  pointer-events: auto;

  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  ${({ $isNext }) =>
    $isNext
      ? `
      transform: translateX(50%);
      right: 40px;      
    `
      : `
      transform: translateX(-50%);
      left: 0;
      
      @media (max-width: 992px) {
        left: 15px;
      }   
    `}

  opacity: ${({ $isHidden }) => ($isHidden ? 0 : 1)};
  visibility: ${({ $isHidden }) => ($isHidden ? 'hidden' : 'visible')};
  pointer-events: ${({ $isHidden }) => ($isHidden ? 'none' : 'auto')};

  &:hover:not(:disabled) {
    box-shadow: 0 0 15px 0 rgba(56, 119, 238, 0.3);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const SlideTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-size: clamp(16px, 2.5vw, 25px);
  line-height: 1.2;
  text-transform: uppercase;
  color: ${colors.accentPrimary};
`;

export const SlideDesciption = styled.p`
  font-weight: 400;
  font-size: clamp(14px, 1vw, 20px);
  line-height: 1.5;
`;
