import React from 'react';
import SEO from 'components/SEO/SEO';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import { primaryTheme } from 'themes/theme';
import Header from 'templates/Header/Header';
import Hero from 'templates/Hero';
import Whyus from 'templates/Whyus/Whyus';
import CarsInfo from 'templates/CarsInfo/CarsInfo';
import Services from 'templates/Services/Services';
import InfoAndAbout from 'templates/InfoAndAbout/InfoAndAbout';

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Root = () => {
  return (
    <Wrapper id="Section0">
      <SEO />
      <ThemeProvider theme={primaryTheme}>
        <GlobalStyles />
        <Header />
        <Hero />
        <Whyus />
        <CarsInfo />
        <Services />
        <InfoAndAbout />
      </ThemeProvider>
    </Wrapper>
  );
};

export default Root;
