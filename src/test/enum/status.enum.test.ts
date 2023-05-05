import { statusEnum } from "../../enums/status.enum";

describe("statusEnum", () => {
  it("should have the correct values", () => {
    expect(statusEnum.Active).toBe("Active");
    expect(statusEnum.Inactive).toBe("Inactive");
  });
});
