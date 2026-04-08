import React from 'react';
import { screen } from '@testing-library/react';
import Education from '../../components/Education';
import { education } from '../../data/constants';
import { renderWithProviders } from '../../testUtils';

describe('Education', () => {
  test('renders without crashing', () => {
    renderWithProviders(<Education />);
  });

  test('renders the "Education" section heading', () => {
    renderWithProviders(<Education />);
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  test('renders the section description', () => {
    renderWithProviders(<Education />);
    expect(
      screen.getByText(/My education has been a journey of self-discovery/i)
    ).toBeInTheDocument();
  });

  test('renders a card for each education entry', () => {
    renderWithProviders(<Education />);
    education.forEach((edu) => {
      expect(screen.getByText(edu.school)).toBeInTheDocument();
      expect(screen.getByText(edu.degree)).toBeInTheDocument();
    });
  });

  test('renders date information for each education entry', () => {
    renderWithProviders(<Education />);
    education.forEach((edu) => {
      expect(screen.getByText(edu.date)).toBeInTheDocument();
    });
  });

  test('renders inside the #education section', () => {
    const { container } = renderWithProviders(<Education />);
    expect(container.querySelector('#education')).toBeInTheDocument();
  });
});
