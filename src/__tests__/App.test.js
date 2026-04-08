import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { darkTheme } from '../utils/Themes';

// Mock typewriter-effect to avoid animation side-effects in tests
jest.mock('typewriter-effect', () => {
  return function MockTypewriter() {
    return <span>Staff Software Engineer</span>;
  };
});

// Mock the hero image import
jest.mock('../images/HeroImage.jpg', () => 'HeroImage.jpg');

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders the Navbar', () => {
    render(<App />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  test('renders the HeroSection with the bio name', () => {
    render(<App />);
    const matches = screen.getAllByText(/Sumant Rai/i);
    expect(matches.length).toBeGreaterThan(0);
  });

  test('renders the Skills section heading', () => {
    render(<App />);
    const matches = screen.getAllByText('Skills');
    expect(matches.length).toBeGreaterThan(0);
  });

  test('renders the Experience section heading', () => {
    render(<App />);
    const matches = screen.getAllByText('Experience');
    expect(matches.length).toBeGreaterThan(0);
  });

  test('renders the Education section heading', () => {
    render(<App />);
    const matches = screen.getAllByText('Education');
    expect(matches.length).toBeGreaterThan(0);
  });

  test('renders the Certifications section heading', () => {
    render(<App />);
    const matches = screen.getAllByText(/Certifications?/i);
    expect(matches.length).toBeGreaterThan(0);
  });

  test('renders the Footer', () => {
    render(<App />);
    expect(screen.getByText(/Sumant Rai. All rights reserved/i)).toBeInTheDocument();
  });
});
