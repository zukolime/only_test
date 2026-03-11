import { colors } from '@/styles/colors';
import styled from 'styled-components';

export const HistoricalDatesBlockWrapper = styled.section`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 120px auto auto;
  grid-auto-rows: auto;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    align-self: center;
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
    height: 100vh;
    grid-template-rows: 56px 70px auto;
    
    }
  }
`;

export const SliderWrapper = styled.div``;

export const SwiperSlideWrapper = styled.div``;

export const BottomContentWrapper = styled.div`
  grid-row: 2;
  grid-column: 1 / -1;
  width: 100%;
  padding-left: clamp(42px, 2vw, 78px);
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 40px;

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
