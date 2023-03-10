import { test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test-utils/renderWithProviders';
import { setupStore } from '../store';
import App from '../App';

test('App', () => {
  const store = setupStore();
  renderWithProviders(<App />, { store });
  expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
});
