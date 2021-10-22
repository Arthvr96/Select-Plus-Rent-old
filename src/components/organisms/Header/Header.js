import React, { useRef, useEffect } from 'react';
import HamburgerMenu from 'components/atoms/HamburgerMenu/HamburgerMenu';
import logo from 'assets/imgaes/HeroSection/logo2.png';
import { HeaderSection, Logo } from './Header.style';

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
