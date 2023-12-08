import { validateZip } from './validateZip';

describe('validateZip', () => {
  it('should return true for a valid zip code', () => {
    const result = validateZip('12345');
    expect(result).toBe(true);
  });

  it('should return false for a zip code with to few digits', () => {
    const result = validateZip('1234');
    expect(result).toBe(false);
  });

  it('should return false for a zip code with too many digits', () => {
    const result = validateZip('123456');
    expect(result).toBe(false);
  });

  it('should return false for a zip code with non-numeric characters', () => {
    const result = validateZip('abcde');
    expect(result).toBe(false);
  });
});
