import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin:0;
    padding:0;
}

html{
    font-size: 62.5%;

}

body{

    font-family: 'Lato', sans-serif;
    font-size: 1.6rem;
    background-color:${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.font.primary};
}

.disableScroll{
    height:100%;
    overflow:hidden;
}
`;

export default GlobalStyles;
