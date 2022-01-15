import {removepunc} from './removepunc';

test('Replace punctuation marks with empty space', () => {
    expect(removepunc('!@#hello%world')).toBe('hello world');
  })