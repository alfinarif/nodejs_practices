import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './assets/css/navbarStyle.css';
import './assets/css/heroSection.css';
import './assets/helpers/navbarHelper.js';
import './assets/helpers/heroSection.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
