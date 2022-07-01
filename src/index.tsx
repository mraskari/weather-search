import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { ThemeProvider } from "@mui/styles";
import { myTheme } from './components/theme';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

