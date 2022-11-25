import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders the h1 element', () => {
  render(<App />);
  const linkElement = screen.getByText("Hello");
  expect(linkElement).toBeInTheDocument();
});