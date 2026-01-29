import styled from 'styled-components';
import { colors } from '@/styles/colors';

export const SectionHeader = styled.header`
  position: absolute;
  top: 15%;
  align-self: flex-start;
  width: 100%;
  padding-left: clamp(42px, 2vw, 78px);
  padding-right: 40px;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 5px;
    height: 100%;
    background: ${colors.accentPrimary};
    background: linear-gradient(
      180deg,
      ${colors.accentPrimary} 0%,
      ${colors.accentSecondary} 100%
    );
  }

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    &:before {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  max-width: 353px;
  width: 40%;
  font-weight: 700;
  font-size: clamp(20px, 6vw, 56px);
  line-height: 1.2;
`;
