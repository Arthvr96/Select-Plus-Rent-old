import React from 'react';
import SEO from 'components/SEO/SEO';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import { primaryTheme } from 'themes/theme';
import Header from 'templates/Header/Header';
import Hero from 'templates/Hero';
import Whyus from 'templates/Whyus/Whyus';

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Section = styled.div`
  width: 100%;
  height: 100vh;
  background: red;
  border: 5px solid black;
`;

const Root = () => {
  return (
    <Wrapper>
      <SEO />
      <ThemeProvider theme={primaryTheme}>
        <GlobalStyles />
        <Header />
        <Hero id="Section1" />
        <Whyus id="Section2" />
        <Section id="Section3" />
        <Section id="Section4" />
        <Section id="Section5" />
      </ThemeProvider>
    </Wrapper>
  );
};

export default Root;
