import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './assets/css/navbarStyle.css';
import './assets/css/heroSection.css';
import './assets/css/skillSection.css';
import './assets/css/serviceSection.css';
import './assets/css/footerSection.css';
import './assets/css/aboutSection.css';
import './assets/css/contactSection.css';

import './assets/helpers/navbarHelper.js';
import './assets/helpers/heroSection.js';
import './assets/helpers/skillSection.js';
import './assets/helpers/serviceSection.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
