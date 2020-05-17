import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';
import logo from 'assets/imgaes/HeroSection/logo2.png';
import { zindex } from 'utilites/zindex';

const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

const Logo = styled.h1`
  position: relative;
  z-index: ${zindex.lvl8};

  margin-left: 1.5rem;
  display: inline-block;
  img {
    width: 10rem;
    height: auto;
  }
`;

const Header = () => {
  return (
    <HeaderSection>
      <Logo>
        <a href="/">
          <img src={logo} alt="Select Plus Rent" />
        </a>
      </Logo>
      <HamburgerMenu />
    </HeaderSection>
  );
};

export default Header;
