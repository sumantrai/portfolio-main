import React from 'react';
import { render, screen } from '../../testUtils';
import HeroSection from './index';

jest.mock('typewriter-effect', () => {
  return function MockTypewriter({ options }) {
    return <span data-testid="typewriter">{options?.strings?.[0] || ''}</span>;
  };
});

describe('HeroSection', () => {
  it('renders without crashing', () => {
    render(<HeroSection />);
  });

  it('renders the name', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Sumant Rai/i)).toBeInTheDocument();
  });

  it('renders "I am a" text', () => {
    render(<HeroSection />);
    expect(screen.getByText(/I am a/i)).toBeInTheDocument();
  });

  it('renders the Typewriter component', () => {
    render(<HeroSection />);
    expect(screen.getByTestId('typewriter')).toBeInTheDocument();
  });

  it('renders the hero image', () => {
    render(<HeroSection />);
    const img = screen.getByAltText('hero-image');
    expect(img).toBeInTheDocument();
  });

  it('renders the Check Resume button', () => {
    render(<HeroSection />);
    const resumeLink = screen.getByText('Check Resume');
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute('href', expect.stringContaining('drive.google.com'));
  });

  it('has an about section id', () => {
    const { container } = render(<HeroSection />);
    expect(container.querySelector('#about')).toBeInTheDocument();
  });
});
