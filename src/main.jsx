import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

// Crée une racine pour ton application
const container = document.getElementById('root');
const root = createRoot(container);

// Rend ton application
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);