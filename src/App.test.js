// testing lib
import { render, screen } from '@testing-library/react';

// component to test
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/react dev template/i);
  expect(headerElement).toBeInTheDocument();
});
