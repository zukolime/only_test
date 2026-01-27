import ArrowIcon from '@/assets/icons/arrow.svg';

import {
  SliderNavigationArrow,
  SliderNavigationArrows,
  SliderNavigationCounter,
  SliderNavigationWrapper,
} from './SliderNavigation.styled';

export const SliderNavigation = () => {
  return (
    <SliderNavigationWrapper>
      <SliderNavigationCounter>01/06</SliderNavigationCounter>

      <SliderNavigationArrows>
        <SliderNavigationArrow>
          <ArrowIcon />
        </SliderNavigationArrow>
        <SliderNavigationArrow>
          <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
        </SliderNavigationArrow>
      </SliderNavigationArrows>
    </SliderNavigationWrapper>
  );
};
