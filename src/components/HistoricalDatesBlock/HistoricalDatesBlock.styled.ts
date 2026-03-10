import { colors } from '@/styles/colors';
import styled from 'styled-components';

export const HistoricalDatesBlockWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 120px auto auto;
  grid-auto-rows: auto;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    align-self: center;
    width: 100%;
    height: 1px;
    background-color: ${colors.secondary};
  }

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: ${colors.secondary};
  }

  @media (max-width: 770px) {
    &:before,
    &:after {
      display: none;
    }
  }

  @media (max-width: 770px) {
    grid-template-rows: 30px repeat(2, auto);
    row-gap: 36px;
    }
  }
`;

export const SliderWrapper = styled.div``;

export const SwiperSlideWrapper = styled.div``;

export const BottomContentWrapper = styled.div`
  grid-row: 2;
  grid-column: 1 / -1;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: clamp(42px, 2vw, 78px);
  padding-right: 40px;
  width: 100%;

  @media (max-width: 770px) {
    flex-direction: column-reverse;
    padding: 0;
    margin-top: 320px;
  }
`;

export const SliderLabel = styled.div`
  grid-row: 2;
  grid-column: 1 / -1;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border-bottom: 1px solid ${colors.secondary};
  font-weight: 700;
  font-size: 16px;
`;
