import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import Slider from 'components/Slider/Slider';
// import img1 from 'assets/imgaes/HeroSection/slider/slajder1.jpg';

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Header />
      <Slider />
    </HeroSection>
  );
};

export default Hero;
