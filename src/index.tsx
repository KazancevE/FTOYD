import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
  },
};

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
} else {
  console.error('Root element not found');
}