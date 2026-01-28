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
          <ArrowIcon
            name='arrow-left'
            width={8}
            height={14}
          />
        </SliderNavigationArrow>
        <SliderNavigationArrow>
          <ArrowIcon
            name='arrow-right'
            width={8}
            height={14}
            style={{ transform: 'rotate(180deg)' }}
          />
        </SliderNavigationArrow>
      </SliderNavigationArrows>
    </SliderNavigationWrapper>
  );
};
