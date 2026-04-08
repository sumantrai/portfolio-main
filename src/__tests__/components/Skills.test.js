import React from 'react';
import { screen } from '@testing-library/react';
import Skills from '../../components/Skills';
import { skills } from '../../data/constants';
import { renderWithProviders } from '../../testUtils';

describe('Skills', () => {
  test('renders without crashing', () => {
    renderWithProviders(<Skills />);
  });

  test('renders the "Skills" section heading', () => {
    renderWithProviders(<Skills />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  test('renders the section description', () => {
    renderWithProviders(<Skills />);
    expect(
      screen.getByText(/Here are some of my skills on which I have been working/i)
    ).toBeInTheDocument();
  });

  test('renders a card for each skill category', () => {
    renderWithProviders(<Skills />);
    skills.forEach((category) => {
      expect(screen.getByText(category.title)).toBeInTheDocument();
    });
  });

  test('renders all skill items within their categories', () => {
    renderWithProviders(<Skills />);
    skills.forEach((category) => {
      category.skills.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });
  });

  test('renders skill images for each skill item', () => {
    renderWithProviders(<Skills />);
    const images = screen.getAllByRole('img');
    // At minimum there should be one image per skill item
    const totalSkillItems = skills.reduce((sum, cat) => sum + cat.skills.length, 0);
    expect(images.length).toBeGreaterThanOrEqual(totalSkillItems);
  });

  test('renders inside the #skills section', () => {
    const { container } = renderWithProviders(<Skills />);
    expect(container.querySelector('#skills')).toBeInTheDocument();
  });
});
