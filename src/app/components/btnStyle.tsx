import styled from 'styled-components';

export const StyledBtn = styled.button`
  padding: var(--space-small) var(--space-medium);
  text-transform: uppercase;
  cursor: pointer;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  border: none;
  z-index: 98;
  transition: all 0.2s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.2s ease-in-out;
  }

  &::before {
    z-index: -1;
    opacity: 0.9;
  }

  &::after {
    transform: translate(-50%) skew(20deg) scaleX(1);
    transition: width 0.36s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: -2;
    left: 50%;
    width: 20px;
  }

  &:hover::after {
    width: 120%;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }
`;

export const StyledBtnGray = styled(StyledBtn)`
  color: var(--main-white);

  &::before {
    background-color: var(--main-shade);
  }

  &::after {
    background-color: #2e1a04;
  }
`;