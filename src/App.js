import React from 'react';
import Root from 'pages/Root';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import { primaryTheme } from 'themes/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={primaryTheme}>
        <GlobalStyles />
        <Root />
      </ThemeProvider>
    </>
  );
};

export default App;
