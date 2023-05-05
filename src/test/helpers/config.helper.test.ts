import { config } from "../../helpers/config.helper";

describe("config", () => {
  it("should have default values if environment variables are not set", () => {
    expect(config.server.port).toEqual(3333);
    expect(config.DB.mongoDB).toEqual("");
    expect(config.jwt.jwtSecret).toEqual("Red2-de-Jesus.1Delunoal8.");
    expect(config.jwt.tokenExpire).toEqual("2h");
  });

  it("should override default values with environment variables", () => {
    const { config } = require("../../helpers/config.helper");

    config.server.port = 8080;
    config.DB.mongoDB = "mongodb://localhost/test";
    config.jwt.jwtSecret = "my-secret";
    config.jwt.tokenExpire = "1d";

    expect(config.server.port).toEqual(8080);
    expect(config.DB.mongoDB).toEqual("mongodb://localhost/test");
    expect(config.jwt.jwtSecret).toEqual("my-secret");
    expect(config.jwt.tokenExpire).toEqual("1d");
  });
});
