import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import media from 'utilites/media';
import CarouselWrapper from 'components/CarouselWrapper/CarouselWrapper';

const HeroSection = styled.section`
  position: fixed;
  top: 5.6rem;
  width: 100%;
  height: 50vh;
  margin-top: ${({ position }) => position}px;

  ${media.desktop`
    height:100vh;
  `}
`;

const Hero = () => {
  let heroSection = useRef(null);

  const paralaxEffect = () => {
    let newPos = 0;
    newPos = (-1 * window.scrollY) / 2;
    if (window.scrollY < window.innerHeight * 3) {
      gsap.set(heroSection, { y: newPos });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', paralaxEffect, true);
  });

  return (
    <HeroSection
      ref={(el) => {
        heroSection = el;
      }}
    >
      <CarouselWrapper />
    </HeroSection>
  );
};

export default Hero;
