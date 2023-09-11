import { getSeasonsName } from '.';

describe('getSeasonsName', () => {
  test('returns "1 сезон" when length is 1', () => {
    expect(getSeasonsName(1)).toBe('1 сезон');
  });
  test('returns "2 сезона" when length is 2', () => {
    expect(getSeasonsName(2)).toBe('2 сезона');
  });
  test('returns "4 сезона" when length is 4', () => {
    expect(getSeasonsName(4)).toBe('4 сезона');
  });
  test('returns "5 сезонов" when length is 5', () => {
    expect(getSeasonsName(5)).toBe('5 сезонов');
  });
});
