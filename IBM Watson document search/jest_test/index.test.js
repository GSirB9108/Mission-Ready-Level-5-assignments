const removepunc = require('./index.js')

test('Replace punctuation marks with empty space', () => {
    expect(removepunc('!@#hello%world')).toBe('hello world');
})