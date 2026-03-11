import { SliderNavigationArrow, SliderNavigationArrows, SliderNavigationCounter, SliderNavigationWrapper } from './SliderNavigation.styled';

import ArrowIcon from '@/assets/icons/arrow.svg';

interface SliderNavigationProps {
  current: number;
  total: number;
  isBeginning: boolean;
  isEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export const SliderNavigation = ({ current, total, isBeginning, isEnd, onPrev, onNext }: SliderNavigationProps) => {
  return (
    <SliderNavigationWrapper>
      <SliderNavigationCounter>
        {String(current).padStart(2, '0')}/{String(total).padStart(2, '0')}
      </SliderNavigationCounter>

      <SliderNavigationArrows>
        <SliderNavigationArrow
          onClick={onPrev}
          $disabled={isBeginning}
          aria-disabled={isBeginning}>
          <ArrowIcon
            width={8}
            height={14}
          />
        </SliderNavigationArrow>

        <SliderNavigationArrow
          onClick={onNext}
          $disabled={isEnd}
          aria-disabled={isEnd}>
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
