import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import theme from './theme';

export default createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    background: ${theme.colors.background};
    color: ${theme.colors.body};
    font-family: ${theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
