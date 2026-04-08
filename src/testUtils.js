import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme } from './utils/Themes';

const AllProviders = ({ children }) => (
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
  </BrowserRouter>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
