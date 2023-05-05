import { Request, Response } from "express";
import { success, error } from "../../utils/response.util";

describe("success", () => {
  it("should respond with the correct status and message", () => {
    const mockReq = {} as Request;
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;
    const message = "Success message";
    const status = 200;

    success(mockReq, mockRes, message, status);

    expect(mockRes.status).toHaveBeenCalledWith(status);
    expect(mockRes.send).toHaveBeenCalledWith({
      error: false,
      status: status,
      data: message,
    });
  });
});

describe("error", () => {
  it("should respond with the correct status and message", () => {
    const mockReq = {} as Request;
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;
    const message = "Error message";
    const status = 404;

    error(mockReq, mockRes, message, status);

    expect(mockRes.status).toHaveBeenCalledWith(status);
    expect(mockRes.send).toHaveBeenCalledWith({
      error: true,
      status: status,
      data: message,
    });
  });

  it("should respond with default status and message if not provided", () => {
    const mockReq = {} as Request;
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;

    error(mockReq, mockRes, "Internal server error", 500);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toHaveBeenCalledWith({
      error: true,
      status: 500,
      data: "Internal server error",
    });
  });
});
