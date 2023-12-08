import { validateEmail } from './validateEmail';


describe('validateEmail', () => {
  it('should return true for a valid email', () => {
    const result = validateEmail('jonatan@gmail.com');
    expect(result).toBe(true);
  });

  it('should return false for an email address without a domain', () => {
    const result = validateEmail('jonatan@gmail');
    expect(result).toBe(false);
  })

  it('should return false for an email missing the @ and second-level domain', () => {
    const result = validateEmail('jonatan.com');
    expect(result).toBe(false);
  });
});
