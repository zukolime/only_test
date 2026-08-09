import styled from 'styled-components';
import { colors } from '@/styles/colors';

export const SectionHeader = styled.div`
  position: relative;
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  padding-left: clamp(42px, 8vw, 80px);

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 5px;
    height: 100%;
    background: ${colors.accentPrimary};
    background: linear-gradient(180deg, ${colors.accentPrimary} 0%, ${colors.accentSecondary} 100%);
  }

  @media (max-width: 770px) {
    padding: 0;
  }

  @media (max-width: 770px) {
    &:before {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  max-width: 353px;
  width: 40%;
  font-weight: 700;
  font-size: clamp(20px, 5vw, 56px);
  line-height: 1.2;
`;
