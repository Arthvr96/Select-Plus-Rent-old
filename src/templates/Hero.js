import CarouselWrapper from 'components/CarouselWrapper/CarouselWrapper';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import media from 'utilites/media';
import gsap from 'gsap';

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
  let herosection = useRef(null);

  const getPos = () => {
    let newPos = 0;
    newPos = (-1 * window.scrollY) / 2;
    gsap.set(herosection, { y: newPos });
  };

  useEffect(() => {
    window.addEventListener('scroll', getPos, true);
  });

  return (
    <HeroSection
      ref={(el) => {
        herosection = el;
      }}
    >
      <CarouselWrapper />
    </HeroSection>
  );
};

export default Hero;
