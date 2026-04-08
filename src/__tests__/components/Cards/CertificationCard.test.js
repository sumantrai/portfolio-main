import React from 'react';
import { screen } from '@testing-library/react';
import CertificationCard from '../../../components/Cards/CertificationCard';
import { renderWithProviders } from '../../../testUtils';

const baseCertification = {
  id: 0,
  school: 'Amazon Web Services',
  date: '2022',
  desc: 'AWS Certified Solutions Architect – Associate',
  degree: 'AWS Certified Solutions Architect – Associate',
};

describe('CertificationCard', () => {
  test('renders without crashing', () => {
    renderWithProviders(<CertificationCard certification={baseCertification} />);
  });

  test('renders the issuing organisation (school)', () => {
    renderWithProviders(<CertificationCard certification={baseCertification} />);
    expect(screen.getByText('Amazon Web Services')).toBeInTheDocument();
  });

  test('renders the certification degree/title', () => {
    renderWithProviders(<CertificationCard certification={baseCertification} />);
    expect(
      screen.getByText('AWS Certified Solutions Architect – Associate')
    ).toBeInTheDocument();
  });

  test('renders the date', () => {
    renderWithProviders(<CertificationCard certification={baseCertification} />);
    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  test('renders an img element with the provided src', () => {
    const cert = { ...baseCertification, img: 'https://example.com/aws.png' };
    renderWithProviders(<CertificationCard certification={cert} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://example.com/aws.png');
  });

  test('renders without error when img prop is absent', () => {
    renderWithProviders(<CertificationCard certification={baseCertification} />);
    // Component renders even when img is undefined
    expect(screen.getByText('Amazon Web Services')).toBeInTheDocument();
  });
});
