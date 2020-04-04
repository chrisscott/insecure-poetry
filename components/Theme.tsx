import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#ccc',
    },
    info: {
      main: '#000',
    },
  },
});

const Theme = ({children}): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme;