import { codeStatusEnum } from "../../enums/statusCode.enum";
import { statusEnum } from "../../enums/status.enum";
import { statusCodeInterface } from "../../interfaces/statusCode.interfaces";

describe("statusCodeInterface", () => {
  it("should have the required properties", () => {
    const statusCode: statusCodeInterface = {
      code: 200,
      name: "OK",
      codeStatus: codeStatusEnum.Successful,
      status: statusEnum.Active,
    };

    expect(statusCode.code).toEqual(200);
    expect(statusCode.name).toEqual("OK");
    expect(statusCode.codeStatus).toEqual(codeStatusEnum.Successful);
    expect(statusCode.status).toEqual(statusEnum.Active);
  });

  it("should allow an optional note property", () => {
    const statusCode: statusCodeInterface = {
      code: 400,
      name: "Bad Request",
      codeStatus: codeStatusEnum.ClientError,
      status: statusEnum.Inactive,
      note: "The request was malformed",
    };

    expect(statusCode.note).toEqual("The request was malformed");
  });
});
