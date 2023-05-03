import { Request, Response } from "express";

const success = (req: Request, res: Response, message: any, status: number) => {
  console.log(status);
  res.status(status).send({
    error: false,
    status: status,
    data: message,
  });
};

const error = (req: Request, res: Response, message: any, status: number) => {
  let statusCode = status || 500;
  let statusMessage = message || "Internal server error";

  res.status(statusCode).send({
    error: true,
    status: status,
    data: message,
  });
};

export { success, error };
