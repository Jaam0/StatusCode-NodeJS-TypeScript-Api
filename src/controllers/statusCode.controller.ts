import { Request, Response } from "express";
import {
  show,
  showById,
  add,
  edit,
  drop,
} from "../services/statusCode.service";
import { success, error } from "../utils/response.util";
import { statusCodeInterface } from "../interfaces/statusCode.interfaces";

const showRows = async (req: Request, res: Response) => {
  try {
    const data = await show();
    success(req, res, data, 200);
  } catch (err: any) {
    error(req, res, err.message, 500);
  }
};
const showOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await showById(Number(id));
    // const status: number = Object.keys(data).length !== 0 ? 200 : 204;
    success(req, res, data, 200);
  } catch (err: any) {
    error(req, res, err.message, 500);
  }
};
const insert = async (req: Request, res: Response) => {
  try {
    const payload:statusCodeInterface = req.body;
    const data = await add(payload);
    // const status: number = Object.keys(data).length !== 0 ? 200 : 204;
    success(req, res, data, 200);
  } catch (err: any) {
    error(req, res, err.message, 500);
  }
};
const update = async () => {};
const dropOne = async () => {};

export { showRows, showOne, insert, update, dropOne };
