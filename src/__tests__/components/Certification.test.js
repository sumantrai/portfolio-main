import React from 'react';
import { screen } from '@testing-library/react';
import Certification from '../../components/Certification';
import { certifications } from '../../data/constants';
import { renderWithProviders } from '../../testUtils';

describe('Certification', () => {
  test('renders without crashing', () => {
    renderWithProviders(<Certification />);
  });

  test('renders the "Certifications" section heading', () => {
    renderWithProviders(<Certification />);
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });

  test('renders the section description', () => {
    renderWithProviders(<Certification />);
    expect(
      screen.getByText(/My certifications demonstrate a continuous journey/i)
    ).toBeInTheDocument();
  });

  test('renders a card for each certification entry', () => {
    renderWithProviders(<Certification />);
    certifications.forEach((cert) => {
      expect(screen.getByText(cert.school)).toBeInTheDocument();
      expect(screen.getByText(cert.degree)).toBeInTheDocument();
    });
  });

  test('renders date information for each certification', () => {
    renderWithProviders(<Certification />);
    certifications.forEach((cert) => {
      expect(screen.getByText(cert.date)).toBeInTheDocument();
    });
  });

  test('renders inside the #certification section', () => {
    const { container } = renderWithProviders(<Certification />);
    expect(container.querySelector('#certification')).toBeInTheDocument();
  });
});
