import { createHeading } from './createHeading';

describe('createHeading', () => {
  it('creates a level 1 heading', () => {
    const result = createHeading('Hello', 1);
    expect(result).toBe('<h1>Hello</h1>');
  });

  it('creates a level 2 heading', () => {
    const result = createHeading('Next level', 2);
    expect(result).toBe('<h2>Next level</h2>');
  });
})
