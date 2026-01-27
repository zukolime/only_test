import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const TimespanWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(30px, 8vw, 100px);
  pointer-events: none;

  @media (max-width: 920px) {
    position: static;
    margin: 40px 0;
    gap: 30px;
    grid-area: timespan;
  }
`;

export const Year = styled.span`
  font-weight: 700;
  font-size: clamp(56px, 10vw, 200px);
  line-height: 80%;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${colors.accentPrimary};

  &:nth-child(2) {
    color: ${colors.accentSecondary};
  }
`;
