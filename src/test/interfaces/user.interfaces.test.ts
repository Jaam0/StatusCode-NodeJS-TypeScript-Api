import { statusEnum } from "../../enums/status.enum";
import { genderEnum } from "../../enums/gender.enum";
import { rolEnum } from "../../enums/rol.enum";
import { userInterface } from "../../interfaces/user.interfaces";

describe("userInterface", () => {
  it("should have the required properties", () => {
    const user: userInterface = {
      fullname: "John Doe",
      email: "johndoe@example.com",
      password: "password",
      status: statusEnum.Active,
    };

    expect(user.fullname).toBeDefined();
    expect(user.email).toBeDefined();
    expect(user.password).toBeDefined();
    expect(user.status).toBeDefined();
  });

  it("should allow optional properties", () => {
    const user: userInterface = {
      fullname: "Jane Doe",
      email: "janedoe@example.com",
      password: "password",
      gender: genderEnum.Female,
      rol: rolEnum.Admin,
      facebook: true,
      status: statusEnum.Inactive,
    };

    expect(user.gender).toBeDefined();
    expect(user.rol).toBeDefined();
    expect(user.facebook).toBeDefined();
  });
});
