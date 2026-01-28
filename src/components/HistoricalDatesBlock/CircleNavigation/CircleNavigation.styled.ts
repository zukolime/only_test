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

export const PointNumber = styled.span`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  font-weight: 400;
  border: 1px solid ${colors.primary};
  border-radius: 100%;
  background-color: #fff;
  transform-origin: center;
  transform: translate(-50%, -50%) scale(0);
  transition:
    opacity 0.4s,
    visibility 0.4s;
`;

export const PointLabel = styled.span`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  white-space: nowrap;
  font-weight: 700;
  transform: translate(50%, -50%);
  transition:
    opacity 0.4s,
    visibility 0.4s;
`;

export const PointButton = styled.button`
  --angle: 0;
  --point-size: 6px;
  position: absolute;
  inset: 0;
  z-index: 50;
  margin: auto;
  width: var(--point-size);
  height: var(--point-size);
  font-family: inherit;
  font-size: 20px;
  color: inherit;
  background-color: ${colors.primary};
  border-radius: 100%;
  transform-origin: center;
  transform: rotate(var(--angle)) translateY(calc(var(--circle-size) / 2))
    rotate(calc(-1 * var(--angle)));
  cursor: pointer;

  &[data-index='0'] {
    --angle: 30deg;
  }
  &[data-index='1'] {
    --angle: 90deg;
  }
  &[data-index='2'] {
    --angle: 150deg;
  }
  &[data-index='3'] {
    --angle: 210deg;
  }
  &[data-index='4'] {
    --angle: 270deg;
  }
  &[data-index='5'] {
    --angle: 330deg;
  }

  &:hover ${PointNumber}, &:focus ${PointNumber} {
    opacity: 1;    
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);
  }
`;
