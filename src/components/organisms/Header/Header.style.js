import styled from 'styled-components';
import { zindex } from 'utilites/zindex';
import media from 'utilites/media';

export const HeaderSection = styled.header`
  position: fixed;
  z-index: ${zindex.lvl8};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  transition: transform 0.4s ease-in-out;

  ${media.desktop`
    transition: transform 0.4s ease-in-out, background-color 0.4s 0.4s ease-in-out;
    background-color: transparent;
    margin-top:6.4rem;
  `}

  &.isHide {
    transform: translateY(-5.6rem);
  }

  &.scaledToSmall {
    transform: translateY(-6.4rem);
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  &.scaledToSmall .logo {
    width: 10rem;
  }

  &.scaledToBig {
    transition: transform 0.4s 0.2s ease-in-out, background-color 0.4s ease-in-out;
    background-color: transparent;
  }

  &.isHideDesktop {
    transform: translateY(-12rem);
  }
`;

export const Logo = styled.h1`
  position: relative;
  z-index: ${zindex.lvl8};
  display: inline-block;

  a {
    display: flex;
    align-items: center;
    width: 10rem;
    margin-left: 1.5rem;

    ${media.desktop`
      width:30rem;
      margin-left: 13rem;
    `}
  }

  img {
    width: 10rem;
    height: auto;
    transition: width 0.4s ease-in-out;

    ${media.desktop`
      width:30rem;
    `}
  }
`;
