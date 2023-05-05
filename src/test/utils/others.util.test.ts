import { isEmail } from '../../utils/others.util';

describe('isEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('test.user+123@example.co.uk')).toBe(true);
    expect(isEmail('test@example.co.jp')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(isEmail('invalid-email')).toBe(false);
    expect(isEmail('test@')).toBe(false);
    expect(isEmail('test@example')).toBe(false);
    expect(isEmail('@example.com')).toBe(false);
  });
});
