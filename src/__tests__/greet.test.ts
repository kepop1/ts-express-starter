import greet from '../greet';

describe('greet', () => {
  test('should return the formatted name', () => {
    const expected = 'Hello Foo';
    const actual = greet('Foo');

    expect(actual).toEqual(expected);
  });
});
