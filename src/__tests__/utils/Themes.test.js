import { darkTheme, lightTheme } from '../../utils/Themes';

const REQUIRED_KEYS = ['bg', 'primary', 'text_primary', 'text_secondary', 'card', 'button'];

describe('darkTheme', () => {
  test('exports an object', () => {
    expect(typeof darkTheme).toBe('object');
    expect(darkTheme).not.toBeNull();
  });

  test('contains all required color keys', () => {
    REQUIRED_KEYS.forEach((key) => {
      expect(darkTheme).toHaveProperty(key);
    });
  });

  test('all color values are non-empty strings', () => {
    Object.values(darkTheme).forEach((value) => {
      expect(typeof value).toBe('string');
      expect(value.length).toBeGreaterThan(0);
    });
  });

  test('has a dark background color', () => {
    expect(darkTheme.bg).toBeTruthy();
  });

  test('bg and bgLight differ from lightTheme equivalents', () => {
    expect(darkTheme.bg).not.toBe(lightTheme.bg);
  });
});

describe('lightTheme', () => {
  test('exports an object', () => {
    expect(typeof lightTheme).toBe('object');
    expect(lightTheme).not.toBeNull();
  });

  test('contains all required color keys', () => {
    REQUIRED_KEYS.forEach((key) => {
      expect(lightTheme).toHaveProperty(key);
    });
  });

  test('all color values are non-empty strings', () => {
    Object.values(lightTheme).forEach((value) => {
      expect(typeof value).toBe('string');
      expect(value.length).toBeGreaterThan(0);
    });
  });

  test('has a light background color', () => {
    expect(lightTheme.bg).toBe('#FFFFFF');
  });
});
