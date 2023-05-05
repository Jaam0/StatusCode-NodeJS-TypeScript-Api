import { rolEnum } from "../../enums/rol.enum";

describe("rolEnum", () => {
  it("should have valid values", () => {
    expect(rolEnum.Reader).toEqual("Reader");
    expect(rolEnum.Editor).toEqual("Editor");
    expect(rolEnum.Admin).toEqual("Admin");
  });
});
