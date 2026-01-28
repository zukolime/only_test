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

export const PointNumber = styled.span<{ $isActive: boolean }>`
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
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
  transform: translate(-50%, -50%) scale(${({ $isActive }) => ($isActive ? 1 : 0)});
  transition:
    opacity 0.4s,
    visibility 0.4s;
`;

export const PointLabel = styled.span<{ $isActive: boolean }>`
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
  position: absolute;
  left: 50%;
  top: 50%;
  padding-left: 16px;
  font-weight: 700;
  transform: translate(50%, -50%);
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
  color: inherit;

  background-color: ${colors.primary};
  border-radius: 100%;
  border: none;
  cursor: pointer;

  transform-origin: center;
  transform: rotate(var(--angle)) translateY(calc(var(--circle-size) / 2))
    rotate(calc(-1 * var(--angle))) rotate(calc(-1 * var(--circle-rotation, 0deg)));

  &:hover ${PointNumber}, &:focus ${PointNumber} {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);

    ${({ $isActive }) =>
      $isActive &&
      `
      --point-size: 56px;
    `}
  }
`;
