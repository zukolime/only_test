import { colors } from '@/styles/colors';
import styled from 'styled-components';

export const CircleContainer = styled.div`
  --circle-size: clamp(420px, 32vw, 530px);
  grid-column: 1 / -1;
  grid-row: 1;
  z-index: 25;
  width: var(--circle-size);
  text-align: center;
  aspect-ratio: 1;
  border: 1px solid ${colors.secondary};
  border-radius: 100%;
`;

export const PointNumber = styled.span<{ $isActive: boolean }>`
  --point-size: clamp(42px, 1vw, 56px);
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--point-size);
  height: var(--point-size);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  background-color: #fff;
  border: 1px solid ${colors.primary};
  border-radius: 100%;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
  transform-origin: center;
  transform: translate(-50%, -50%) scale(${({ $isActive }) => ($isActive ? 1 : 0)});
  transition:
    opacity 0.4s,
    visibility 0.4s,
    transform 0.4s ease;
`;

export const PointLabel = styled.span<{ $isActive: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  padding-left: 42px;
  font-weight: 700;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
  transform: translateY(-50%);
  transition:
    opacity 0.4s,
    visibility 0.4s;
`;

export const PointButton = styled.button<{ $isActive?: boolean }>`
  --angle: 0deg;
  --point-size: 6px;

  position: absolute;
  inset: 0;
  z-index: 50;
  margin: auto;

  width: var(--point-size);
  height: var(--point-size);

  font-family: inherit;
  font-size: 20px;
  font-size: clamp(16px, 1vw, 20px);
  color: inherit;

  background-color: ${colors.primary};
  border-radius: 100%;
  border: none;
  cursor: pointer;

  transform-origin: center;
  transform: rotate(var(--angle)) translateY(calc(var(--circle-size) / 2)) rotate(calc(-1 * var(--angle)))
    rotate(calc(-1 * var(--circle-rotation, 0deg)));

  &:hover ${PointNumber}, &:focus ${PointNumber} {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);
  }
`;
