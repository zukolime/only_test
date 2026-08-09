import styled from 'styled-components';

export const CreatedByWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 16px;
  padding-right: 20px;
  font-size: 14px;
  text-align: right;
`;

export const CreatedByLink = styled.a`
  color: currentColor;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;
