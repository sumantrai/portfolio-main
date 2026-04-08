import React from 'react';
import { render, screen } from '../../testUtils';
import Footer from './index';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders the logo name', () => {
    render(<Footer />);
    expect(screen.getByText('Sumant Rai')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Footer />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('renders social media icons', () => {
    render(<Footer />);
    const linkedInLink = document.querySelector('a[href*="linkedin"]');
    expect(linkedInLink).toBeInTheDocument();
  });

  it('renders copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/2025 Sumant Rai/i)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });
});
