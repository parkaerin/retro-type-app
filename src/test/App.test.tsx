import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Retro App/i);
  expect(linkElement).toBeInTheDocument();
});
