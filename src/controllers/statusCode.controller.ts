
import {Request,Response} from 'express';
import {
  show,
  showById,
  add,
  edit,
  drop,
} from "../services/statusCode.service";
import { success, error } from "../utils/response.util";

const showRows = async (req:Request,res:Response) => {
  try {
    const data = await show();
    success(req,res,data,200);
  } catch (err: any) {
    error(req,res,err.message,500);
  }
};
const showOne = async () => {};
const insert = async () => {};
const update = async () => {};
const dropOne = async () => {};

export { showRows, showOne, insert, update, dropOne };
