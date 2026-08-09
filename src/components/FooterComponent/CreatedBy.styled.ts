import styled from 'styled-components';

export const CreatedByWrapper = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  font-size: 12px;
`;

export const CreatedByLink = styled.a`
  color: currentColor;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;
