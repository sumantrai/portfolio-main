import React from 'react';
import { screen } from '@testing-library/react';
import Experience from '../../components/Experience';
import { experiences } from '../../data/constants';
import { renderWithProviders } from '../../testUtils';

describe('Experience', () => {
  test('renders without crashing', () => {
    renderWithProviders(<Experience />);
  });

  test('renders the "Experience" section heading', () => {
    renderWithProviders(<Experience />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  test('renders the section description', () => {
    renderWithProviders(<Experience />);
    expect(
      screen.getByText(/Experienced Software Engineer with a strong track record/i)
    ).toBeInTheDocument();
  });

  test('renders a card for each experience entry', () => {
    renderWithProviders(<Experience />);
    experiences.forEach((exp) => {
      expect(screen.getByText(exp.role)).toBeInTheDocument();
      expect(screen.getByText(exp.company)).toBeInTheDocument();
    });
  });

  test('renders date information for each experience', () => {
    renderWithProviders(<Experience />);
    experiences.forEach((exp) => {
      expect(screen.getByText(exp.date)).toBeInTheDocument();
    });
  });

  test('renders the skills for each experience entry', () => {
    renderWithProviders(<Experience />);
    experiences.forEach((exp) => {
      exp.skills.forEach((skill) => {
        const skillElements = screen.getAllByText(`• ${skill}`);
        expect(skillElements.length).toBeGreaterThan(0);
      });
    });
  });

  test('renders inside the #experience section', () => {
    const { container } = renderWithProviders(<Experience />);
    expect(container.querySelector('#experience')).toBeInTheDocument();
  });
});
