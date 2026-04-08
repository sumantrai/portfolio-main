import React from 'react';
import { render, screen } from '../../testUtils';
import Certification from './index';
import { certifications } from '../../data/constants';

describe('Certification', () => {
  it('renders without crashing', () => {
    render(<Certification />);
  });

  it('renders the Certifications heading', () => {
    render(<Certification />);
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Certification />);
    expect(screen.getByText(/continuous journey of learning/i)).toBeInTheDocument();
  });

  it('renders all certification entries', () => {
    render(<Certification />);
    certifications.forEach((cert) => {
      expect(screen.getByText(cert.school)).toBeInTheDocument();
      expect(screen.getByText(cert.degree)).toBeInTheDocument();
    });
  });

  it('renders certification dates', () => {
    render(<Certification />);
    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  it('has a certification section id', () => {
    const { container } = render(<Certification />);
    expect(container.querySelector('#certification')).toBeInTheDocument();
  });
});
