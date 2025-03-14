import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers'; // Correction ici

// Étend les matchers de Vitest avec ceux de Jest DOM
expect.extend(matchers);

// Nettoie le DOM après chaque test
afterEach(() => {
  cleanup();
});