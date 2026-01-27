import { colors } from '@/styles/colors';
import styled from 'styled-components';

export const CircleContainer = styled.div`
  --circle-size: clamp(420px, 40vw, 530px);
  position: relative;
  z-index: 20;
  margin: auto;
  width: var(--circle-size);
  aspect-ratio: 1;
  border-radius: 100%;
  border: 1px solid ${colors.secondary};

  @media (max-width: 992px) {
    display: none;
  }
`;
