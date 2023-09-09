import { convertMinutes } from '.';

describe('convertMinutes', () => {
  test('converts 0 minutes', () => {
    expect(convertMinutes(0)).toBe('0 мин');
  });

  test('converts 60 minutes to 1 hour', () => {
    expect(convertMinutes(60)).toBe('1 ч 0 мин');
  });

  test('converts 90 minutes to 1 hour and 30 minutes', () => {
    expect(convertMinutes(90)).toBe('1 ч 30 мин');
  });
});
