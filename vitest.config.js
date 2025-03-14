import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Pour simuler un environnement navigateur
    globals: true, // Permet d'utiliser `describe`, `it`, etc. sans les importer
    setupFiles: './tests/setup.js', // Fichier de configuration pour les tests
  },
});