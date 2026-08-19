import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Little Lemon home page', () => {
  render(<App />);
  const ctaElement = screen.getByText('Reserve a Table');
  expect(ctaElement).toBeInTheDocument();
});
