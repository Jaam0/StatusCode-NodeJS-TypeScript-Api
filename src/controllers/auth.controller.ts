import { Request, Response } from "express";
import { login, add } from "../services/user.service";
import { success, error } from "../utils/response.util";
import { userInterface } from "src/interfaces/user.interfaces";

const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password }: userInterface = req.body;

    const data = await login(email, password);
    success(req, res, data, 200);
  } catch (err: any) {
    error(req, res, err.message, 500);
  }
};

const signUp = async (req: Request, res: Response) => {
  try {
    const payload: userInterface = req.body;
    const data = await add(payload);
    success(req, res, data, 200);
  } catch (err: any) {
    error(req, res, err.message, 500);
  }
};

export { signIn, signUp };
