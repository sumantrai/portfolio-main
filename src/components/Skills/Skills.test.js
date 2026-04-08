import React from 'react';
import { render, screen } from '../../testUtils';
import Skills from './index';
import { skills } from '../../data/constants';

describe('Skills', () => {
  it('renders without crashing', () => {
    render(<Skills />);
  });

  it('renders the Skills heading', () => {
    render(<Skills />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Skills />);
    expect(screen.getByText(/past 6 years/i)).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<Skills />);
    skills.forEach((category) => {
      expect(screen.getByText(category.title)).toBeInTheDocument();
    });
  });

  it('renders individual skill items', () => {
    render(<Skills />);
    expect(screen.getByText('Java 8')).toBeInTheDocument();
    expect(screen.getByText('Spring Boot')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
  });

  it('renders skill images', () => {
    render(<Skills />);
    const images = document.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('has a skills section id', () => {
    const { container } = render(<Skills />);
    expect(container.querySelector('#skills')).toBeInTheDocument();
  });
});
