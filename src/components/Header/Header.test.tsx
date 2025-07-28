import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders a logo in the header', () => {
    render(<Header />);

    const logo = screen.getByText('NORDIC KNOTS');

    expect(logo).toBeInTheDocument();
  });
});
