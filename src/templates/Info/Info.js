import React from 'react';
import styled from 'styled-components';
import fixedBg from 'assets/imgaes/InfoAndAbout/funfact-bg.jpg';

const FixedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100vh;
  background: url(${fixedBg}) no-repeat 40% 10%;
  background-size: auto 100%;
`;

const Info = styled.section`
  width: 100%;
  height: 100vh;
  background: rgba(17, 46, 59, 0.7);
`;

const InfoAndAbout = () => {
  return (
    <>
      <FixedBackground />
      <Info />
    </>
  );
};

export default InfoAndAbout;
