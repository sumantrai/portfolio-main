import React from 'react';
import { render, screen } from '../../testUtils';
import Education from './index';
import { education } from '../../data/constants';

describe('Education', () => {
  it('renders without crashing', () => {
    render(<Education />);
  });

  it('renders the Education heading', () => {
    render(<Education />);
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Education />);
    expect(screen.getByText(/journey of self-discovery/i)).toBeInTheDocument();
  });

  it('renders all education entries', () => {
    render(<Education />);
    education.forEach((edu) => {
      expect(screen.getByText(edu.school)).toBeInTheDocument();
      expect(screen.getByText(edu.degree)).toBeInTheDocument();
    });
  });

  it('renders education dates', () => {
    render(<Education />);
    expect(screen.getByText('2011 - 2014')).toBeInTheDocument();
  });

  it('has an education section id', () => {
    const { container } = render(<Education />);
    expect(container.querySelector('#education')).toBeInTheDocument();
  });
});
