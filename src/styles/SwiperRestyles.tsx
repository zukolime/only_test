import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const SwiperGlobalStyle = createGlobalStyle`
  .historical-swiper {
    grid-column: 1 / -1;
    grid-row: 3;
    width: 100%;
    padding-top: 36px;
    margin-top: -36px;
    > .swiper-wrapper {
      > .swiper-slide {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(4, auto);
        align-content: center;
        align-items: center;
        justify-items: center;

        @media (max-width: 770px) {
          align-content: space-around;
        }
      }
    }

    .swiper-pagination {
      display: none;
    }

    .swiper-pagination-bullet {
      background-color: ${colors.primary};
    }
  }

  .cards-swiper {
    > .swiper-wrapper {
      > .swiper-slide {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
      }
    }
  }

  @media (max-width: 990px) {
    .swiper-slide-next,
    .swiper-slide-prev {
      opacity: 0.3;
      transition: opacity 0.3s ease;
    }
  }
  
  @media (max-width: 770px) {  
    .historical-swiper > .swiper-pagination {
      display: block;
      margin-bottom: 72px;
    }
  }
`;
