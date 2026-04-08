import React from 'react';
import { render, screen } from '../../testUtils';
import ExperienceCard from './ExperienceCard';

const mockExperience = {
  id: 0,
  role: 'Staff Software Engineer',
  company: 'Test Company',
  date: 'Jan 2020 – Present',
  img: 'https://example.com/logo.png',
  desc: 'Built scalable microservices and cloud-native applications.',
  skills: ['Java', 'Spring Boot', 'AWS'],
};

const mockExperienceNoDoc = {
  id: 1,
  role: 'Senior Developer',
  company: 'Another Corp',
  date: 'Jan 2018 – Dec 2019',
  img: 'https://example.com/logo2.png',
};

describe('ExperienceCard', () => {
  it('renders without crashing', () => {
    render(<ExperienceCard experience={mockExperience} />);
  });

  it('renders the role', () => {
    render(<ExperienceCard experience={mockExperience} />);
    expect(screen.getByText('Staff Software Engineer')).toBeInTheDocument();
  });

  it('renders the company name', () => {
    render(<ExperienceCard experience={mockExperience} />);
    expect(screen.getByText('Test Company')).toBeInTheDocument();
  });

  it('renders the date', () => {
    render(<ExperienceCard experience={mockExperience} />);
    expect(screen.getByText('Jan 2020 – Present')).toBeInTheDocument();
  });

  it('renders the description when provided', () => {
    render(<ExperienceCard experience={mockExperience} />);
    expect(screen.getByText(/scalable microservices/i)).toBeInTheDocument();
  });

  it('renders the skills list when provided', () => {
    render(<ExperienceCard experience={mockExperience} />);
    expect(screen.getByText(/Java/)).toBeInTheDocument();
    expect(screen.getByText(/Spring Boot/)).toBeInTheDocument();
    expect(screen.getByText(/AWS/)).toBeInTheDocument();
  });

  it('renders the Skills label when skills are present', () => {
    render(<ExperienceCard experience={mockExperience} />);
    expect(screen.getByText('Skills:')).toBeInTheDocument();
  });

  it('does not render skills section when skills are absent', () => {
    render(<ExperienceCard experience={mockExperienceNoDoc} />);
    expect(screen.queryByText('Skills:')).not.toBeInTheDocument();
  });

  it('renders the company image', () => {
    render(<ExperienceCard experience={mockExperience} />);
    const img = document.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/logo.png');
  });
});
