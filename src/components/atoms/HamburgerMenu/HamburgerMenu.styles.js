import styled from 'styled-components';
import { zindex } from 'utilites/zindex';
import media from 'utilites/media';

export const ButtonHamburger = styled.button`
  position: ${({ isOpen }) => (isOpen ? 'fixed' : 'relative')};
  z-index: ${zindex.lvl8};
  right: 1.5rem;
  display: inline-block;
  margin: 0;
  padding: 1rem;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  ${media.desktop`
    display:none;
  `}
`;

export const HamburgerBox = styled.span`
  position: relative;
  display: inline-block;
  width: 1.9rem;
  height: 1.2rem;
`;

export const HamburgerInner = styled.span`
  position: relative;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  height: 0.2rem;
  transform: translateY(-50%);
  background-color: ${({ theme, isOpen }) => (isOpen ? 'transparent' : theme.colors.primary)};
  transition: background-color 0.2s ease-in;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &::before {
    top: -5px;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(5px) rotate(45deg);' : 'translateY(0px) rotate(0deg);'};
    transition: transform 0.4s 0.1s ease-in;
  }

  &::after {
    top: 5px;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(-5px) rotate(-45deg);' : 'translateY(0px) rotate(0deg);'};
    transition: transform 0.4s 0.1s ease-in;
  }
`;
