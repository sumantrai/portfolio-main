import React from 'react';
import { screen } from '@testing-library/react';
import HeroSection from '../../components/HeroSection';
import { Bio } from '../../data/constants';
import { renderWithProviders } from '../../testUtils';

jest.mock('typewriter-effect', () => {
  return function MockTypewriter() {
    return <span data-testid="typewriter">Staff Software Engineer</span>;
  };
});

jest.mock('../../images/HeroImage.jpg', () => 'HeroImage.jpg');

describe('HeroSection', () => {
  test('renders without crashing', () => {
    renderWithProviders(<HeroSection />);
  });

  test('renders the bio name', () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByText(/Sumant Rai/i)).toBeInTheDocument();
  });

  test('renders "Hi, I am" greeting text', () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByText(/Hi, I am/i)).toBeInTheDocument();
  });

  test('renders the typewriter component', () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByTestId('typewriter')).toBeInTheDocument();
  });

  test('renders "I am a" prefix text', () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByText(/I am a/i)).toBeInTheDocument();
  });

  test('renders the bio description', () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByText(Bio.description)).toBeInTheDocument();
  });

  test('renders the Check Resume button linking to the resume URL', () => {
    renderWithProviders(<HeroSection />);
    const resumeLink = screen.getByRole('link', { name: /Check Resume/i });
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute('href', Bio.resume);
  });

  test('renders the hero image with alt text', () => {
    renderWithProviders(<HeroSection />);
    const img = screen.getByAltText('hero-image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'HeroImage.jpg');
  });

  test('renders inside the #about section', () => {
    const { container } = renderWithProviders(<HeroSection />);
    const aboutSection = container.querySelector('#about');
    expect(aboutSection).toBeInTheDocument();
  });
});
