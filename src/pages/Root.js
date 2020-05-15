import React from 'react';
import SEO from 'components/SEO/SEO';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import { primaryTheme } from 'themes/theme';

const Root = () => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={primaryTheme}>
        <GlobalStyles />
        <h2>Test</h2>
      </ThemeProvider>
    </>
  );
};

export default Root;
