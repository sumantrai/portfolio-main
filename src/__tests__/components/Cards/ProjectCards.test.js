import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import ProjectCards from '../../../components/Cards/ProjectCards';
import { renderWithProviders } from '../../../testUtils';

const baseProject = {
  id: 0,
  title: 'My Awesome Project',
  date: 'Jan 2024',
  description: 'A short description of the project.',
  image: 'https://example.com/project.png',
  tags: ['React', 'Node.js'],
  member: [{ img: 'https://example.com/avatar.png' }],
};

describe('ProjectCards', () => {
  test('renders without crashing', () => {
    const setOpenModal = jest.fn();
    renderWithProviders(<ProjectCards project={baseProject} setOpenModal={setOpenModal} />);
  });

  test('renders the project title', () => {
    renderWithProviders(
      <ProjectCards project={baseProject} setOpenModal={jest.fn()} />
    );
    expect(screen.getByText('My Awesome Project')).toBeInTheDocument();
  });

  test('renders the project date', () => {
    renderWithProviders(
      <ProjectCards project={baseProject} setOpenModal={jest.fn()} />
    );
    expect(screen.getByText('Jan 2024')).toBeInTheDocument();
  });

  test('renders the project description', () => {
    renderWithProviders(
      <ProjectCards project={baseProject} setOpenModal={jest.fn()} />
    );
    expect(
      screen.getByText('A short description of the project.')
    ).toBeInTheDocument();
  });

  test('renders all project tags', () => {
    renderWithProviders(
      <ProjectCards project={baseProject} setOpenModal={jest.fn()} />
    );
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  test('renders the project image', () => {
    renderWithProviders(
      <ProjectCards project={baseProject} setOpenModal={jest.fn()} />
    );
    const img = screen.getAllByRole('img')[0];
    expect(img).toHaveAttribute('src', 'https://example.com/project.png');
  });

  test('renders member avatars', () => {
    renderWithProviders(
      <ProjectCards project={baseProject} setOpenModal={jest.fn()} />
    );
    const images = screen.getAllByRole('img');
    // project image + 1 member avatar
    expect(images.length).toBeGreaterThanOrEqual(2);
  });

  test('calls setOpenModal with the correct arguments when clicked', () => {
    const setOpenModal = jest.fn();
    renderWithProviders(
      <ProjectCards project={baseProject} setOpenModal={setOpenModal} />
    );
    fireEvent.click(screen.getByText('My Awesome Project'));
    expect(setOpenModal).toHaveBeenCalledWith({
      state: true,
      project: baseProject,
    });
  });

  test('renders without tags when tags are absent', () => {
    const noTagsProject = { ...baseProject, tags: undefined };
    renderWithProviders(
      <ProjectCards project={noTagsProject} setOpenModal={jest.fn()} />
    );
    expect(screen.queryByText('React')).not.toBeInTheDocument();
  });

  test('renders without member avatars when member is absent', () => {
    const noMemberProject = { ...baseProject, member: undefined };
    renderWithProviders(
      <ProjectCards project={noMemberProject} setOpenModal={jest.fn()} />
    );
    // Only the project image should be present (no avatar)
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(1);
  });
});
