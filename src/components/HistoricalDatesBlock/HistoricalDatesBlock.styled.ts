import { colors } from '@/styles/colors';
import styled from 'styled-components';

export const HistoricalDatesBlockWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${colors.secondary};
  }

  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: ${colors.secondary};
  }

  .swiper {
    width: 100%;
  }

  .historical-swiper {
    > .swiper-wrapper {
      > .swiper-slide {
        position: relative;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    .swiper-pagination {
      display: none;
      margin-bottom: 100px;
    }

    .swiper-pagination-bullet {
      background-color: ${colors.primary};
    }
  }

  @media (max-width: 768px) {
    &:before,
    &:after {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .historical-swiper > .swiper-pagination {
      display: block;
    }
  }
`;

export const BottomContentWrapper = styled.div`
  position: absolute;
  z-index: -1;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 420px;
  padding-top: 120px;
  padding-left: clamp(42px, 2vw, 78px);
  padding-right: 40px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 320px;
  }

  @media (max-width: 992px) {
    padding: 0;
  }
`;

export const SliderLabel = styled.span`
  border-bottom: 1px solid ${colors.secondary};
  padding-top: 62px;
  padding-bottom: 32px;
  font-weight: 700;
  font-size: 16px;
  width: 100%;
`;
