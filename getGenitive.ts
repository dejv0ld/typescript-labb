export const getGenitive = (name: string): string => {
  if (name.endsWith('s') || name.endsWith('x') || name.endsWith('z')) {
    return name;
  }
  return name + 's';
};
