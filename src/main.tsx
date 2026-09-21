import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Zanderio chatbot widget
const zanderioScript = document.createElement('script');
zanderioScript.src = 'https://cdn.zanderio.ai/widget/loader.js';
zanderioScript.setAttribute('data-id', 'wdg_rovjc9rQPuxVm55WldhZ73wU');
zanderioScript.async = true;
document.body.appendChild(zanderioScript);