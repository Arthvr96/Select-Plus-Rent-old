import React from 'react';
import styled from 'styled-components';
import fixedBg from 'assets/imgaes/InfoAndAbout/funfact-bg.jpg';
// import gsap from 'gsap';

const FixedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100vh;
  background: url(${fixedBg}) no-repeat;
  background-size: cover;
`;

const Info = styled.section`
  width: 100%;
  height: 50vh;
  background: rgba(17, 46, 59, 0.7);
`;

const AboutUs = styled.section`
  position: relative;
  z-index: 5000;
  width: 100%;
  height: 50vh;
  background: ${({ theme }) => theme.colors.tertiary};
`;

const InfoAndAbout = () => {
  return (
    <>
      <FixedBackground />
      <Info />
      <AboutUs />
    </>
  );
};

export default InfoAndAbout;
