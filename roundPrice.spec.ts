import { roundPrice } from './roundPrice';

describe('roundPrice', () => {
  it('rounds to 2 decimal places', () => {
    expect(roundPrice(232.10542)).toBe('232.11 SEK');
  });

  it('formats a whole number correctly', () => {
    expect(roundPrice(100)).toBe('100.00 SEK');
  });

  it('rounds a price with fewer decimals correctly', () => {
    expect(roundPrice(1024.2048)).toBe('1024.21 SEK');
  });

  //Testfall för valuta
  it('handles the given currency USD', () => {
    expect(roundPrice(232.10542, 'USD %PRICE%')).toBe('USD 232.11');
  });

  it('handles the given currency NOK', () => {
    expect(roundPrice(1024.2048, 'NOK %PRICE%')).toBe('NOK 1024.21');
  });

  it('defaults to SEK if currency is not provided', () => {
    expect(roundPrice(14)).toBe('14.00 SEK');
  });

  it('formats price with currency symbol after (kr)', () => {
    expect(roundPrice(232.10542, '%PRICE% kr')).toBe('232.11 kr');
  });

  it('formats price with currency symbol before (USD)', () => {
    expect(roundPrice(1024.2048, 'USD %PRICE%')).toBe('USD 1024.21');
  });

  it('formats price with currency symbol before ($)', () => {
    expect(roundPrice(14, '$%PRICE%')).toBe('$14.00');
  });

  it('defaults to previous behavior if there is no pattern provided', () => {
    expect(roundPrice(14, '%PRICE% SEK')).toBe('14.00 SEK');
  });
});
