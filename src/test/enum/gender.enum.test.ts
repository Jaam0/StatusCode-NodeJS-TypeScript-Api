import { genderEnum } from '../../enums/gender.enum';

describe('genderEnum', () => {
  it('should have "Female" and "Male" as valid values', () => {
    expect(genderEnum.Female).toEqual('Female');
    expect(genderEnum.Male).toEqual('Male');
  });
});
