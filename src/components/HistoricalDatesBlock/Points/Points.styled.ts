import styled from 'styled-components';
import { colors } from '@/styles/colors';

export const PointsContainer = styled.button`
  --angle: 0;
  --point-size: 6px;
  position: absolute;
  inset: 0;
  margin: auto;
  width: var(--point-size);
  height: var(--point-size);
  font-family: inherit;
  font-size: 20px;
  color: inherit;
  background-color: #42567a;
  border-radius: 100%;
  transform-origin: center;
  transform: rotate(var(--angle)) translateY(calc(var(--circle-size) / 2))
    rotate(calc(-1 * var(--angle)));
  cursor: pointer;
`;

export const PointNumber = styled.span`
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
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s;
`;

export const PointLabel = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  white-space: nowrap;
  font-weight: 700;
`;
