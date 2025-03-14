// tests/Greeting.test.jsx
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n/i18n.js';
import Greeting from '../src/components/Greeting.jsx';

test('affiche le message de bienvenue en anglais', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Greeting name="John" />
    </I18nextProvider>
  );

  expect(screen.getByText('Welcome')).toBeInTheDocument();
  expect(screen.getByText('Hello, John!')).toBeInTheDocument();
});

test('affiche le message de bienvenue en français', () => {
  i18n.changeLanguage('fr'); // Change la langue en français
  render(
    <I18nextProvider i18n={i18n}>
      <Greeting name="Jean" />
    </I18nextProvider>
  );

  expect(screen.getByText('Bienvenue')).toBeInTheDocument();
  expect(screen.getByText('Bonjour, Jean !')).toBeInTheDocument();
});