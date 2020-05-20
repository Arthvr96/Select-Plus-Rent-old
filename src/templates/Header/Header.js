import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
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

  const parallax = () => {
    const oldScrollPos = scrollPos;

    scrollPos = window.scrollY;
    if (oldScrollPos < scrollPos) {
      if (window.scrollY > 57) {
        gsap.to(headerSection, { duration: 1, y: -56 });
      }
    } else if (oldScrollPos > scrollPos) {
      gsap.to(headerSection, { duration: 1.5, y: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', parallax, true);
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
      <HamburgerMenu />
    </HeaderSection>
  );
};

export default Header;
