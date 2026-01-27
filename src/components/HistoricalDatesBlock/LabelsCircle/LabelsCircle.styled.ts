import { colors } from '@/styles/colors';
import styled from 'styled-components';

export const CircleContainer = styled.div`
  --circle-size: clamp(420px, 40vw, 530px);
  position: absolute;
  text-align: center;
  width: var(--circle-size);
  aspect-ratio: 1;
  border: 1px solid ${colors.secondary};
  border-radius: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;
