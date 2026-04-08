import React from 'react';
import { render, screen, fireEvent } from '../../testUtils';
import Navbar from './index';

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
  });

  it('renders the Portfolio logo text', () => {
    render(<Navbar />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Skills').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Experience').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Education').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Certification').length).toBeGreaterThan(0);
  });

  it('renders the Github Profile button', () => {
    render(<Navbar />);
    expect(screen.getByText('Github Profile')).toBeInTheDocument();
  });

  it('shows mobile menu when hamburger icon is clicked', () => {
    render(<Navbar />);
    const svgIcon = document.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
    fireEvent.click(svgIcon);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
  });
});
