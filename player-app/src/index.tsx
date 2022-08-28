import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';

import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { COLOR_DARK, COLOR_EXTRADARK } from './constants';
import store from './store';
import { extradarkToDark } from './utils/utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

const decorativeColor = localStorage.getItem('decorativeColor') || COLOR_DARK;
const decorativeColorDark = extradarkToDark(decorativeColor);

const theme = createTheme({
  palette: {
    primary: {
      main: decorativeColorDark,
    },
    secondary: {
      main: COLOR_EXTRADARK,
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
