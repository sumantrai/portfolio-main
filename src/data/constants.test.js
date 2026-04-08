import { Bio, skills, experiences, education, certifications } from './constants';

describe('Bio', () => {
  it('has a name', () => {
    expect(typeof Bio.name).toBe('string');
    expect(Bio.name.length).toBeGreaterThan(0);
  });

  it('has roles array', () => {
    expect(Array.isArray(Bio.roles)).toBe(true);
    expect(Bio.roles.length).toBeGreaterThan(0);
  });

  it('has description', () => {
    expect(typeof Bio.description).toBe('string');
    expect(Bio.description.length).toBeGreaterThan(0);
  });

  it('has a resume link', () => {
    expect(typeof Bio.resume).toBe('string');
    expect(Bio.resume.length).toBeGreaterThan(0);
  });

  it('has a linkedin link', () => {
    expect(typeof Bio.linkedin).toBe('string');
  });
});

describe('skills', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(skills)).toBe(true);
    expect(skills.length).toBeGreaterThan(0);
  });

  it('each skill category has a title and skills array', () => {
    skills.forEach((category) => {
      expect(typeof category.title).toBe('string');
      expect(Array.isArray(category.skills)).toBe(true);
      expect(category.skills.length).toBeGreaterThan(0);
    });
  });

  it('each skill item has a name and image', () => {
    skills.forEach((category) => {
      category.skills.forEach((item) => {
        expect(typeof item.name).toBe('string');
        expect(typeof item.image).toBe('string');
      });
    });
  });
});

describe('experiences', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(experiences)).toBe(true);
    expect(experiences.length).toBeGreaterThan(0);
  });

  it('each experience has required fields', () => {
    experiences.forEach((exp) => {
      expect(typeof exp.role).toBe('string');
      expect(typeof exp.company).toBe('string');
      expect(typeof exp.date).toBe('string');
    });
  });
});

describe('education', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(education)).toBe(true);
    expect(education.length).toBeGreaterThan(0);
  });

  it('each education entry has required fields', () => {
    education.forEach((edu) => {
      expect(typeof edu.school).toBe('string');
      expect(typeof edu.date).toBe('string');
      expect(typeof edu.degree).toBe('string');
    });
  });
});

describe('certifications', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(certifications)).toBe(true);
    expect(certifications.length).toBeGreaterThan(0);
  });

  it('each certification has required fields', () => {
    certifications.forEach((cert) => {
      expect(typeof cert.school).toBe('string');
      expect(typeof cert.date).toBe('string');
      expect(typeof cert.degree).toBe('string');
    });
  });
});
