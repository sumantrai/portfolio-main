import React from 'react';
import { screen } from '@testing-library/react';
import Footer from '../../components/Footer';
import { Bio } from '../../data/constants';
import { renderWithProviders } from '../../testUtils';

describe('Footer', () => {
  test('renders without crashing', () => {
    renderWithProviders(<Footer />);
  });

  test('renders the logo with the portfolio owner name', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('Sumant Rai')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Experience/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Education/i })).toBeInTheDocument();
  });

  test('navigation links point to the correct anchors', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByRole('link', { name: /About/i })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: /Skills/i })).toHaveAttribute('href', '#skills');
    expect(screen.getByRole('link', { name: /Experience/i })).toHaveAttribute('href', '#experience');
    expect(screen.getByRole('link', { name: /Education/i })).toHaveAttribute('href', '#education');
  });

  test('renders the LinkedIn social media icon link', () => {
    renderWithProviders(<Footer />);
    const linkedinLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href') === Bio.linkedin);
    expect(linkedinLinks.length).toBeGreaterThan(0);
  });

  test('renders the copyright notice', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/2025 Sumant Rai. All rights reserved/i)).toBeInTheDocument();
  });

  test('social links open in a new tab', () => {
    renderWithProviders(<Footer />);
    const socialLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href') === Bio.linkedin);
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', 'display');
    });
  });
});
