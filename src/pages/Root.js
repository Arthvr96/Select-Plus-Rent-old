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

const Root = () => {
  return (
    <Wrapper>
      <SEO />
      <ThemeProvider theme={primaryTheme}>
        <GlobalStyles />
        <Header />
        <Hero />
        <Whyus />
      </ThemeProvider>
    </Wrapper>
  );
};

export default Root;
