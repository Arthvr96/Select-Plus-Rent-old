import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { zindex } from 'utilites/zindex';
import media from 'utilites/media';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';
import logo from 'assets/imgaes/HeroSection/logo2.png';

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

const Logo = styled.h1`
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

const Header = () => {
  let headerSection = useRef(null);
  let scrollPos = window.scrollY;
  let scrollPosX = window.scrollY;
  let isVisable = false;
  let isScaled = false;

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
        }
      } else if (oldScrollPos > scrollPos) {
        headerSection.classList.remove('isHide');
      }
    }
  };

  const showHideAnimationDesktop = () => {
    const oldScrollPos = scrollPos;
    scrollPos = window.scrollY;
    if (scrollPos > window.innerHeight) {
      if (oldScrollPos < scrollPos) {
        headerSection.classList.add('isHideDesktop');
      } else if (oldScrollPos > scrollPos) {
        headerSection.classList.remove('isHideDesktop');
      }
    }
  };

  const scallHeaderSection = () => {
    if (isScaled) {
      headerSection.classList.add('scaledToSmall');
      headerSection.classList.remove('scaledToBig');
    } else {
      headerSection.classList.add('scaledToBig');
      headerSection.classList.remove('scaledToSmall');
    }
  };

  const scallHederSectionTrigger = () => {
    const viewPortHight = window.innerHeight;
    scrollPosX = window.scrollY;

    if (!isScaled && scrollPosX > viewPortHight / 2) {
      isScaled = true;
      scallHeaderSection();
    } else if (isScaled && scrollPosX < viewPortHight / 2) {
      isScaled = false;
      scallHeaderSection();
    }

    showHideAnimationDesktop();
  };

  useEffect(() => {
    if (window.innerWidth < 1100) {
      window.addEventListener('scroll', showHideAnimation, true);
    } else {
      window.addEventListener('scroll', scallHederSectionTrigger, true);
    }
  });

  return (
    <HeaderSection
      ref={(el) => {
        headerSection = el;
      }}
    >
      <Logo>
        <a href="/">
          <img className="logo" src={logo} alt="Select Plus Rent" />
        </a>
      </Logo>
      <HamburgerMenu isVisable={changeVisable} />
    </HeaderSection>
  );
};

export default Header;
