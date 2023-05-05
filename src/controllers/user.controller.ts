import { Request, Response } from "express";
import { show, showById, add, edit, drop } from "../services/user.service";
import { success, error } from "../utils/response.util";
import { userInterface } from "../interfaces/user.interfaces";

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
    const data = await showById(id);
    success(req, res, data, 200);
  } catch (err: any) {
    error(req, res, err.message, 500);
  }
};
const insert = async (req: Request, res: Response) => {
  try {
    const payload: userInterface = req.body;
    const data = await add(payload);
    success(req, res, data, 200);
  } catch (err: any) {
    error(req, res, err.message, 500);
  }
};
const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payload: userInterface = req.body;
    const data = await edit(id, payload);
    success(req, res, data, 200);
  } catch (err: any) {
    error(req, res, err.message, 500);
  }
};
const dropOne = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await drop(id);
    success(req, res, data, 200);
  } catch (err: any) {
    error(req, res, err.message, 500);
  }
};

export { showRows, showOne, insert, update, dropOne };
