import { darkTheme, lightTheme } from './Themes';

describe('Themes', () => {
  it('darkTheme has required color keys', () => {
    expect(darkTheme).toHaveProperty('bg');
    expect(darkTheme).toHaveProperty('primary');
    expect(darkTheme).toHaveProperty('text_primary');
    expect(darkTheme).toHaveProperty('text_secondary');
    expect(darkTheme).toHaveProperty('card');
    expect(darkTheme).toHaveProperty('white');
    expect(darkTheme).toHaveProperty('black');
  });

  it('lightTheme has required color keys', () => {
    expect(lightTheme).toHaveProperty('bg');
    expect(lightTheme).toHaveProperty('primary');
    expect(lightTheme).toHaveProperty('text_primary');
    expect(lightTheme).toHaveProperty('text_secondary');
    expect(lightTheme).toHaveProperty('card');
    expect(lightTheme).toHaveProperty('button');
  });

  it('darkTheme bg is a valid hex color', () => {
    expect(darkTheme.bg).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  it('lightTheme bg is white', () => {
    expect(lightTheme.bg).toBe('#FFFFFF');
  });
});
