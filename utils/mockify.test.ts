import { mockify } from './mockify';

test('mockify', () => {
  const obj = {
    a: '',
    b: {
      c: [],
      d: 'test string'
    },

    e: false,
    f: null,
    g: undefined,
    h: 0,
    j: 1
  }

  const result = {
    a: '/string',
    b: {
      c: [],
      d: '/string'
    },

    e: false,
    f: null,
    g: undefined,
    h: 0,
    j: 1
  }

  expect(mockify('')).toEqual('/string');
  expect(mockify({ test: '' })).toEqual({ test: '/string' });
  expect(mockify(obj)).toEqual(result);
});


