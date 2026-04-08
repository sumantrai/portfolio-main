import React from 'react';
import { render, screen } from '../../testUtils';
import EducationCard from './EducationCard';

const mockEducation = {
  id: 0,
  school: 'Test University',
  degree: "Master's Degree",
  date: '2011 - 2014',
  desc: 'MCA - Master of Computer Applications',
  img: 'https://example.com/university-logo.png',
};

const mockEducationWithDoc = {
  ...mockEducation,
  doc: 'https://example.com/certificate.pdf',
};

describe('EducationCard', () => {
  it('renders without crashing', () => {
    render(<EducationCard education={mockEducation} />);
  });

  it('renders the school name', () => {
    render(<EducationCard education={mockEducation} />);
    expect(screen.getByText('Test University')).toBeInTheDocument();
  });

  it("renders the degree", () => {
    render(<EducationCard education={mockEducation} />);
    expect(screen.getByText("Master's Degree")).toBeInTheDocument();
  });

  it('renders the date', () => {
    render(<EducationCard education={mockEducation} />);
    expect(screen.getByText('2011 - 2014')).toBeInTheDocument();
  });

  it('renders the institution image', () => {
    render(<EducationCard education={mockEducation} />);
    const img = document.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/university-logo.png');
  });
});
