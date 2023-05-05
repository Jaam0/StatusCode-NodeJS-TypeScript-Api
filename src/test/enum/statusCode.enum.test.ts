import { codeStatusEnum } from "../../enums/statusCode.enum";

describe("codeStatusEnum", () => {
  it("should have a value of 'Successful' equal to 'Successful'", () => {
    expect(codeStatusEnum.Successful).toEqual("Successful");
  });

  it("should have a value of 'Redirection' equal to 'Redirection'", () => {
    expect(codeStatusEnum.Redirection).toEqual("Redirection");
  });

  it("should have a value of 'ClientError' equal to 'Client Error'", () => {
    expect(codeStatusEnum.ClientError).toEqual("Client Error");
  });

  it("should have a value of 'ServerError' equal to 'Server Error'", () => {
    expect(codeStatusEnum.ServerError).toEqual("Server Error");
  });
});
