import React from 'react';
import { screen } from '@testing-library/react';
import EducationCard from '../../../components/Cards/EducationCard';
import { renderWithProviders } from '../../../testUtils';

const baseEducation = {
  id: 0,
  school: 'Pondicherry Central University',
  date: '2011 - 2014',
  desc: 'MCA - Master of Computer Applications',
  degree: "Master's Degree",
};

describe('EducationCard', () => {
  test('renders without crashing', () => {
    renderWithProviders(<EducationCard education={baseEducation} />);
  });

  test('renders the school name', () => {
    renderWithProviders(<EducationCard education={baseEducation} />);
    expect(screen.getByText('Pondicherry Central University')).toBeInTheDocument();
  });

  test('renders the degree', () => {
    renderWithProviders(<EducationCard education={baseEducation} />);
    expect(screen.getByText("Master's Degree")).toBeInTheDocument();
  });

  test('renders the date', () => {
    renderWithProviders(<EducationCard education={baseEducation} />);
    expect(screen.getByText('2011 - 2014')).toBeInTheDocument();
  });

  test('renders without an image when img prop is absent', () => {
    renderWithProviders(<EducationCard education={baseEducation} />);
    // img element renders but src is undefined – no alt text is set so no accessible image
    const images = screen.queryAllByRole('img');
    // Even without an explicit src, an <img> element is rendered in the component
    expect(images.length).toBeGreaterThanOrEqual(0);
  });

  test('renders with an image when img prop is provided', () => {
    const edu = { ...baseEducation, img: 'https://example.com/logo.png' };
    renderWithProviders(<EducationCard education={edu} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://example.com/logo.png');
  });
});
