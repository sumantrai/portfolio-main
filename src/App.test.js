import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('typewriter-effect', () => {
  return function MockTypewriter({ options }) {
    return <span data-testid="typewriter">{options?.strings?.[0] || ''}</span>;
  };
});

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders the Navbar', () => {
    render(<App />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('renders the HeroSection with name', () => {
    render(<App />);
    expect(screen.getAllByText(/Sumant Rai/i).length).toBeGreaterThan(0);
  });

  it('renders the Skills section', () => {
    render(<App />);
    expect(screen.getAllByText('Skills').length).toBeGreaterThan(0);
  });

  it('renders the Experience section', () => {
    render(<App />);
    expect(screen.getAllByText('Experience').length).toBeGreaterThan(0);
  });

  it('renders the Education section', () => {
    render(<App />);
    expect(screen.getAllByText('Education').length).toBeGreaterThan(0);
  });

  it('renders the Certifications section', () => {
    render(<App />);
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });

  it('renders the Footer', () => {
    render(<App />);
    expect(screen.getByText('Sumant Rai', { selector: 'h1' })).toBeInTheDocument();
  });
});
