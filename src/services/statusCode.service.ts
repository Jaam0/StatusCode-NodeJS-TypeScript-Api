import { codeStatusEnum } from "../enums/statusCode.enum";
import { statusEnum } from "../enums/status.enum";
import { statusCodeInterface } from "../interfaces/statusCode.interfaces";
// import statusCodeModel from "../models/modelsDB/statusCode";
import { Database } from "../database/db";

const database = new Database();
const statusCodeCollection = database.statusCodeCollection;
const show = async (): Promise<statusCodeInterface[] | any> => {
  const data = statusCodeCollection.find();
  console.log(data);
  // const data = await statusCodeModel.find({});
  return data;
};

const showById = async (id: number) => {
  const query = `SELECT A.* FROM STATUSCODE A WHERE A.ID = ?`;
  // const data = await db().each(query, [id], (err: any, res: any) => {
  //   if (err) {
  //     console.log(`Error trying to consult by ID: ${err}`);
  //   }
  // if (res !== undefined) {
  //   statusCodeData.id = res.id;
  //   statusCodeData.code = res.code;
  //   statusCodeData.name = res.name;
  //   statusCodeData.codeStatus = res.codeStatus;
  //   statusCodeData.note = res.note;
  //   statusCodeData.status = res.status;
  //   return statusCodeData;
  // } else {
  //   return "Data not found";
  // }
  // });
  // return data;
};

const add = async (payload: statusCodeInterface) => {
  const code = payload.code;
  const findOnDB = await statusCodeCollection.findOne({ code });
  if (findOnDB) {
    return "The row already exist";
  }
  const statusCode = statusCodeCollection.insertOne(payload);
  return statusCode;
};

const edit = async () => {};

const drop = async () => {};

export { show, showById, add, edit, drop };
