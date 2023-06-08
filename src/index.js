import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#030014',
    },
    secondary: {
      main: '#E4E4E6',
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
