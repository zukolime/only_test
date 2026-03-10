import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const TimespanWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(30px, 8vw, 100px);
  pointer-events: none;

  @media (max-width: 520px) {
    gap: 30px;
  }
`;

export const Year = styled.span`
  font-weight: 700;
  font-size: clamp(56px, 14vw, 200px);
  line-height: 80%;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${colors.accentPrimary};

  &:nth-child(2) {
    color: ${colors.accentSecondary};
  }
`;
