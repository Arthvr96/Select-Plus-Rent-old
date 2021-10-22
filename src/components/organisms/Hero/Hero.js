import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import CarouselWrapper from 'components/molecues/CarouselWrapper/CarouselWrapper';
import { HeroSection } from './Hero.style';

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
