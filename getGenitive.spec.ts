
import { getGenitive } from './getGenitive';

describe('getGenitive', () => {
  it('adds -s to regular names', () => {
    expect(getGenitive('Jonatan')).toBe('Jonatans');
    expect(getGenitive('Anna')).toBe('Annas');
    expect(getGenitive('Johanna')).toBe('Johannas');
  });

  it('does not add -s to names ending with -s, -x or -z', () => {
    expect(getGenitive('Claes')).toBe('Claes');
    expect(getGenitive('Hampus')).toBe('Hampus');
    expect(getGenitive("Alex")).toBe("Alex");
  });
});
