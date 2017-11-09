import 'roboto-npm-webfont';
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'react-jss';

const theme = {
  colors: {
    primaryColor: 'rgb(25, 169, 144)',
    secondaryColor: 'rgb(204, 204, 204)',
    borderColor: 'rgb(238, 238, 238)',
    activeBackgroundColor: 'rgb(255, 255, 255)',
    inactiveBackgroundColor: 'rgb(247, 246, 247)'
  },
  fonts: {
    primaryFontFamily: 'Roboto, sans-serif',
  }
};

const Theme = story =>
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>;

export default Theme;
