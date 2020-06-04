import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';
import logo from 'assets/imgaes/HeroSection/logo2.png';
import { zindex } from 'utilites/zindex';

const HeaderSection = styled.header`
  position: fixed;
  z-index: ${zindex.lvl8};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  transition: transform 0.4s ease-in-out;

  &.isHide {
    transform: translateY(-5.6rem);
  }

  &.isVisible {
    transform: translateY(0);
  }
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
  let headerSection = useRef(null);
  let scrollPos = window.scrollY;
  let isVisable = false;

  const changeVisable = () => {
    if (isVisable === false) {
      isVisable = true;
    } else {
      isVisable = false;
    }
  };

  const showHideAnimation = () => {
    const oldScrollPos = scrollPos;
    scrollPos = window.scrollY;

    if (!isVisable) {
      if (oldScrollPos < scrollPos) {
        if (window.scrollY > 57) {
          headerSection.classList.add('isHide');
          headerSection.classList.remove('isVisible');
        }
      } else if (oldScrollPos > scrollPos) {
        headerSection.classList.add('isVisible');
        headerSection.classList.remove('isHide');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showHideAnimation, true);
  });

  return (
    <HeaderSection
      ref={(el) => {
        headerSection = el;
      }}
    >
      <Logo>
        <a href="/">
          <img src={logo} alt="Select Plus Rent" />
        </a>
      </Logo>
      <HamburgerMenu isVisable={changeVisable} />
    </HeaderSection>
  );
};

export default Header;
