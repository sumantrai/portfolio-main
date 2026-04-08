import { Bio, skills, experiences, education, certifications } from '../../data/constants';

describe('Bio', () => {
  test('has a name', () => {
    expect(Bio.name).toBeTruthy();
    expect(typeof Bio.name).toBe('string');
  });

  test('has an array of roles', () => {
    expect(Array.isArray(Bio.roles)).toBe(true);
    expect(Bio.roles.length).toBeGreaterThan(0);
  });

  test('has a description string', () => {
    expect(typeof Bio.description).toBe('string');
    expect(Bio.description.length).toBeGreaterThan(0);
  });

  test('has a resume URL', () => {
    expect(typeof Bio.resume).toBe('string');
    expect(Bio.resume).toMatch(/^https?:\/\//);
  });

  test('has a linkedin URL', () => {
    expect(typeof Bio.linkedin).toBe('string');
    expect(Bio.linkedin).toMatch(/^https?:\/\//);
  });
});

describe('skills', () => {
  test('is a non-empty array', () => {
    expect(Array.isArray(skills)).toBe(true);
    expect(skills.length).toBeGreaterThan(0);
  });

  test('each skill category has a title and skills array', () => {
    skills.forEach((category) => {
      expect(typeof category.title).toBe('string');
      expect(category.title.length).toBeGreaterThan(0);
      expect(Array.isArray(category.skills)).toBe(true);
      expect(category.skills.length).toBeGreaterThan(0);
    });
  });

  test('each skill item has a name and image', () => {
    skills.forEach((category) => {
      category.skills.forEach((item) => {
        expect(typeof item.name).toBe('string');
        expect(item.name.length).toBeGreaterThan(0);
        expect(typeof item.image).toBe('string');
        expect(item.image.length).toBeGreaterThan(0);
      });
    });
  });

  test('contains expected skill categories', () => {
    const titles = skills.map((s) => s.title);
    expect(titles).toContain('Programming Languages');
    expect(titles).toContain('Frameworks');
    expect(titles).toContain('Cloud & DevOps');
    expect(titles).toContain('Databases');
    expect(titles).toContain('Monitoring & QA');
  });
});

describe('experiences', () => {
  test('is a non-empty array', () => {
    expect(Array.isArray(experiences)).toBe(true);
    expect(experiences.length).toBeGreaterThan(0);
  });

  test('each entry has required fields', () => {
    experiences.forEach((exp) => {
      expect(typeof exp.id).toBe('number');
      expect(typeof exp.role).toBe('string');
      expect(exp.role.length).toBeGreaterThan(0);
      expect(typeof exp.company).toBe('string');
      expect(exp.company.length).toBeGreaterThan(0);
      expect(typeof exp.date).toBe('string');
      expect(typeof exp.desc).toBe('string');
      expect(Array.isArray(exp.skills)).toBe(true);
    });
  });

  test('ids are unique', () => {
    const ids = experiences.map((e) => e.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  test('contains expected companies', () => {
    const companies = experiences.map((e) => e.company);
    expect(companies).toContain('Tesco Technology');
    expect(companies).toContain('Nike Technology');
    expect(companies).toContain('Walmart Labs');
  });
});

describe('education', () => {
  test('is a non-empty array', () => {
    expect(Array.isArray(education)).toBe(true);
    expect(education.length).toBeGreaterThan(0);
  });

  test('each entry has required fields', () => {
    education.forEach((edu) => {
      expect(typeof edu.id).toBe('number');
      expect(typeof edu.school).toBe('string');
      expect(edu.school.length).toBeGreaterThan(0);
      expect(typeof edu.date).toBe('string');
      expect(typeof edu.desc).toBe('string');
      expect(typeof edu.degree).toBe('string');
    });
  });

  test('ids are unique', () => {
    const ids = education.map((e) => e.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

describe('certifications', () => {
  test('is a non-empty array', () => {
    expect(Array.isArray(certifications)).toBe(true);
    expect(certifications.length).toBeGreaterThan(0);
  });

  test('each entry has required fields', () => {
    certifications.forEach((cert) => {
      expect(typeof cert.id).toBe('number');
      expect(typeof cert.school).toBe('string');
      expect(cert.school.length).toBeGreaterThan(0);
      expect(typeof cert.date).toBe('string');
      expect(typeof cert.desc).toBe('string');
      expect(typeof cert.degree).toBe('string');
    });
  });

  test('ids are unique', () => {
    const ids = certifications.map((c) => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  test('contains expected certifications', () => {
    const degrees = certifications.map((c) => c.degree);
    expect(degrees).toContain('AWS Certified Solutions Architect – Associate');
  });
});
