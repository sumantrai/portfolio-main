import React from 'react';
import { render, screen } from '../../testUtils';
import CertificationCard from './CertificationCard';

const mockCertification = {
  id: 0,
  school: 'Amazon Web Services',
  degree: 'AWS Certified Solutions Architect – Associate',
  date: '2022',
  desc: 'AWS Certified Solutions Architect – Associate',
  img: 'https://example.com/aws-logo.png',
};

describe('CertificationCard', () => {
  it('renders without crashing', () => {
    render(<CertificationCard certification={mockCertification} />);
  });

  it('renders the issuing organization name', () => {
    render(<CertificationCard certification={mockCertification} />);
    expect(screen.getByText('Amazon Web Services')).toBeInTheDocument();
  });

  it('renders the certification title', () => {
    render(<CertificationCard certification={mockCertification} />);
    expect(
      screen.getByText('AWS Certified Solutions Architect – Associate')
    ).toBeInTheDocument();
  });

  it('renders the date', () => {
    render(<CertificationCard certification={mockCertification} />);
    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  it('renders the organization logo image', () => {
    render(<CertificationCard certification={mockCertification} />);
    const img = document.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/aws-logo.png');
  });
});
