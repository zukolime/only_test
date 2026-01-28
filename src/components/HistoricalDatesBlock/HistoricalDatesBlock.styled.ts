import styled from 'styled-components';

export const HistoricalDatesBlockWrapper = styled.div`
  width: 100%;

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
  }
`;
