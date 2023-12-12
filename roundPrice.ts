export const roundPrice = (price: number, pattern: string = '%PRICE% SEK'): string => {
  const roundedPrice = (Math.ceil(price * 100) / 100).toFixed(2);
  return pattern.replace('%PRICE%', roundedPrice);
};
