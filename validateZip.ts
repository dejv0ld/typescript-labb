export const validateZip = (zip: string): boolean => {
  const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
  return zipRegex.test(zip);
}
