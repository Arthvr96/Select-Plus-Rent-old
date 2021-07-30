import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'api/apolloClient';
import SEO from 'components/atoms/SEO/SEO';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import { primaryTheme } from 'themes/theme';
import Header from 'components/organisms/Header/Header';
import Hero from 'components/organisms/Hero/Hero';
import Whyus from 'components/organisms/Whyus/Whyus';
import CarsInfo from 'components/organisms/CarsInfo/CarsInfo';
import Services from 'components/organisms/Services/Services';
import Info from 'components/organisms/Info/Info';
import About from 'components/organisms/About/About';
import Section1 from 'components/organisms/Section1/Section1';
import { Wrapper } from './Root.style';

const Root = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Wrapper id="Section0">
        <SEO />
        <ThemeProvider theme={primaryTheme}>
          <GlobalStyles />
          <Header />
          <Hero />
          <Whyus />
          <CarsInfo />
          <Services />
          <Info />
          <About />
          <Section1 />
          <Section1 />
        </ThemeProvider>
      </Wrapper>
    </ApolloProvider>
  );
};

export default Root;
