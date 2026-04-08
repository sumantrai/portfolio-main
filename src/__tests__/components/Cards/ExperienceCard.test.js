import React from 'react';
import { screen } from '@testing-library/react';
import ExperienceCard from '../../../components/Cards/ExperienceCard';
import { renderWithProviders } from '../../../testUtils';

const baseExperience = {
  id: 0,
  role: 'Staff Software Engineer',
  company: 'Tesco Technology',
  date: 'Jul 2024 – Present',
  desc: 'Architected and delivered real-time ML-based pricing systems.',
  skills: ['Java 21', 'Spring WebFlux', 'Azure'],
};

describe('ExperienceCard', () => {
  test('renders without crashing', () => {
    renderWithProviders(<ExperienceCard experience={baseExperience} />);
  });

  test('renders the role', () => {
    renderWithProviders(<ExperienceCard experience={baseExperience} />);
    expect(screen.getByText('Staff Software Engineer')).toBeInTheDocument();
  });

  test('renders the company name', () => {
    renderWithProviders(<ExperienceCard experience={baseExperience} />);
    expect(screen.getByText('Tesco Technology')).toBeInTheDocument();
  });

  test('renders the date', () => {
    renderWithProviders(<ExperienceCard experience={baseExperience} />);
    expect(screen.getByText('Jul 2024 – Present')).toBeInTheDocument();
  });

  test('renders the description', () => {
    renderWithProviders(<ExperienceCard experience={baseExperience} />);
    expect(
      screen.getByText(/Architected and delivered real-time ML-based pricing systems/i)
    ).toBeInTheDocument();
  });

  test('renders the "Skills:" label and all skill items', () => {
    renderWithProviders(<ExperienceCard experience={baseExperience} />);
    expect(screen.getByText('Skills:')).toBeInTheDocument();
    expect(screen.getByText('• Java 21')).toBeInTheDocument();
    expect(screen.getByText('• Spring WebFlux')).toBeInTheDocument();
    expect(screen.getByText('• Azure')).toBeInTheDocument();
  });

  test('does not render Skills section when skills are absent', () => {
    const noSkillsExp = { ...baseExperience, skills: undefined };
    renderWithProviders(<ExperienceCard experience={noSkillsExp} />);
    expect(screen.queryByText('Skills:')).not.toBeInTheDocument();
  });

  test('does not render description when desc is absent', () => {
    const noDescExp = { ...baseExperience, desc: undefined };
    renderWithProviders(<ExperienceCard experience={noDescExp} />);
    expect(
      screen.queryByText(/Architected and delivered/i)
    ).not.toBeInTheDocument();
  });

  test('renders a document link when doc prop is provided', () => {
    const docExp = { ...baseExperience, doc: 'https://example.com/doc.pdf' };
    renderWithProviders(<ExperienceCard experience={docExp} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com/doc.pdf');
  });

  test('does not render a document link when doc prop is absent', () => {
    renderWithProviders(<ExperienceCard experience={baseExperience} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
