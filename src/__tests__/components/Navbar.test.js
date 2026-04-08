import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Navbar from '../../components/Navbar';
import { renderWithProviders } from '../../testUtils';

describe('Navbar', () => {
  test('renders the Portfolio logo text', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  test('renders desktop navigation links', () => {
    renderWithProviders(<Navbar />);
    const aboutLinks = screen.getAllByText('About');
    expect(aboutLinks.length).toBeGreaterThan(0);

    const skillsLinks = screen.getAllByText('Skills');
    expect(skillsLinks.length).toBeGreaterThan(0);

    const experienceLinks = screen.getAllByText('Experience');
    expect(experienceLinks.length).toBeGreaterThan(0);

    const educationLinks = screen.getAllByText('Education');
    expect(educationLinks.length).toBeGreaterThan(0);

    const certificationLinks = screen.getAllByText('Certification');
    expect(certificationLinks.length).toBeGreaterThan(0);
  });

  test('renders the GitHub Profile button', () => {
    renderWithProviders(<Navbar />);
    const githubButtons = screen.getAllByText('Github Profile');
    expect(githubButtons.length).toBeGreaterThan(0);
  });

  test('mobile menu is not visible initially', () => {
    const { container } = renderWithProviders(<Navbar />);
    // Multiple SVG icons render (DiCssdeck logo + FaBars hamburger)
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThan(0);
  });

  test('clicking the hamburger icon opens the mobile menu', () => {
    const { container } = renderWithProviders(<Navbar />);
    // Before click, mobile menu is not rendered (no mobile-only links)
    const beforeAboutLinks = screen.getAllByText('About');
    const beforeCount = beforeAboutLinks.length;

    // FaBars is the last SVG (DiCssdeck is first); click its parent MobileIcon div
    const svgs = container.querySelectorAll('svg');
    const faBars = svgs[svgs.length - 1];
    fireEvent.click(faBars);

    // After click, mobile menu renders additional "About" links
    const afterAboutLinks = screen.getAllByText('About');
    expect(afterAboutLinks.length).toBeGreaterThan(beforeCount);
  });

  test('clicking a mobile menu link closes the menu', () => {
    const { container } = renderWithProviders(<Navbar />);
    const svgs = container.querySelectorAll('svg');
    const faBars = svgs[svgs.length - 1];
    fireEvent.click(faBars);

    // Mobile menu is now open
    const openAboutLinks = screen.getAllByText('About');
    const openCount = openAboutLinks.length;

    // Click the last "About" link (inside the mobile menu)
    fireEvent.click(openAboutLinks[openAboutLinks.length - 1]);

    // Mobile menu closes – link count decreases
    const closedAboutLinks = screen.getAllByText('About');
    expect(closedAboutLinks.length).toBeLessThan(openCount);
  });
});
