import React from 'react';
import SEO from 'components/SEO/SEO';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import { primaryTheme } from 'themes/theme';
import Hero from 'templates/Hero';

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Test = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  margin-bottom: 5px solid black;
`;

const Headerr = styled.h3`
  font-size: 40px;
  color: #fff;
  margin-top: 15px;
`;

const Root = () => {
  return (
    <Wrapper>
      <SEO />
      <ThemeProvider theme={primaryTheme}>
        <GlobalStyles />
        <Hero />
        <Test id="Section1">
          <Headerr>Section 1</Headerr>
        </Test>
        <Test id="Section2">
          <Headerr>Section 2</Headerr>
        </Test>
        <Test id="Section3">
          <Headerr>Section 3</Headerr>
        </Test>
        <Test id="Section4">
          <Headerr>Section 4</Headerr>
        </Test>
        <Test id="Section5">
          <Headerr>Section 5</Headerr>
        </Test>
      </ThemeProvider>
    </Wrapper>
  );
};

export default Root;
