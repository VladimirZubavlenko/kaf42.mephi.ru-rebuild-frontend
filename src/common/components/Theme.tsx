import * as React from 'react';
import * as WebFont from 'webfontloader';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'normalize.css';

import { Colors } from '../enums/colors';
import { Fonts } from '../enums/fonts';
import { Breakpoints } from '../enums/breakpoints';

const theme = {};

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: ${Fonts.MONTSERRAT}, sans-serif;
    background: ${Colors.BLACK};
    color: ${Colors.WHITE};
    font-size: 10px;
    @media (max-width: ${Breakpoints.MOBILE}px) {
      font-size: calc(8.6px + (19.6 - 8.6)*(100vw - 320px)/447);
    }
    @media (min-width: ${Breakpoints.MOBILE}px) and (max-width: ${Breakpoints.TABLET}px) {
      font-size: calc(8.5px + 1.5*(100vw - 768px)/(1024 - 768));
    }
    @media (min-width: ${Breakpoints.TABLET}px) and (max-width: ${Breakpoints.DESKTOP}px) {
      font-size: calc(5px + (12.5 - 5)*((100vw - 768px)/(1920 - 768)));
    }
  }
  body {
    font-size: 1.6rem;
    height: 100%;
    overflow: hidden;
    width: 100%;
  }
  #app {
    height: 100%;
  }
  *::-webkit-scrollbar {
    display: none;
  }
  * {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
  }
`;

WebFont.load({
  google: {
    families: ['Press Start 2P', 'Montserrat:200,400,600', 'sans-serif'],
  },
});

export interface IProps {
  children: React.ReactChild;
}

export const Theme: React.FC<IProps> = React.memo(({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
));
