import { isPrime } from './isPrime';

describe('isPrime', () => {
  it('should return true if input is prime', () => {
    expect(isPrime(5)).toBe(true);
  });

  it('should return false if input is not prime', () => {
    expect(isPrime(4)).toBe(false);
  });
});
