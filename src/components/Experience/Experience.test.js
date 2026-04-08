import React from 'react';
import { render, screen } from '../../testUtils';
import Experience from './index';
import { experiences } from '../../data/constants';

describe('Experience', () => {
  it('renders without crashing', () => {
    render(<Experience />);
  });

  it('renders the Experience heading', () => {
    render(<Experience />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Experience />);
    expect(screen.getByText(/Experienced Software Engineer/i)).toBeInTheDocument();
  });

  it('renders all experience entries', () => {
    render(<Experience />);
    experiences.forEach((exp) => {
      expect(screen.getByText(exp.role)).toBeInTheDocument();
      expect(screen.getByText(exp.company)).toBeInTheDocument();
    });
  });

  it('renders experience dates', () => {
    render(<Experience />);
    expect(screen.getByText('Jul 2024 – Present')).toBeInTheDocument();
  });

  it('has an experience section id', () => {
    const { container } = render(<Experience />);
    expect(container.querySelector('#experience')).toBeInTheDocument();
  });
});
