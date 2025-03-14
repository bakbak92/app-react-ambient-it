import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('affiche le texte "Vite + React"', () => {
  render(<App />);
  const element = screen.getByText(/Vite \+ React/i); // Trouve un élément par son texte
  expect(element).toBeTruthy(); // Vérifie que l'élément existe
});