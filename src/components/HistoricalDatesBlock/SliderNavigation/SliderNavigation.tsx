import ArrowIcon from '@/assets/icons/arrow.svg';

import {
  SliderNavigationArrow,
  SliderNavigationArrows,
  SliderNavigationCounter,
  SliderNavigationWrapper,
} from './SliderNavigation.styled';

interface SliderNavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export const SliderNavigation = ({
  current,
  total,
  onPrev,
  onNext,
}: SliderNavigationProps) => {
  return (
    <SliderNavigationWrapper>
      <SliderNavigationCounter>
        {String(current).padStart(2, '0')}/{String(total).padStart(2, '0')}
      </SliderNavigationCounter>

      <SliderNavigationArrows>
        <SliderNavigationArrow onClick={onPrev}>
          <ArrowIcon
            width={8}
            height={14}
          />
        </SliderNavigationArrow>

        <SliderNavigationArrow onClick={onNext}>
          <ArrowIcon
            width={8}
            height={14}
            style={{ transform: 'rotate(180deg)' }}
          />
        </SliderNavigationArrow>
      </SliderNavigationArrows>
    </SliderNavigationWrapper>
  );
};
