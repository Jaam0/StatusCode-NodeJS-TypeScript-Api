import { statusCodeInterface } from "../interfaces/statusCode.interfaces";
import { StatusCodeModel } from "../models/modelsDB/statusCode";

const show = async (): Promise<statusCodeInterface[] | any> => {
  const statusCodeData = await StatusCodeModel.find({});

  if (statusCodeData.length === 0) {
    return "There is not data";
  }
  return statusCodeData;
};

const showById = async (id: string) => {
  const validObjectId = id.match(/^[0-9a-fA-F]{24}$/);

  const existStatusCode = validObjectId
    ? await StatusCodeModel.findById(id)
    : "Invalid ObjectID";

  if (!existStatusCode) {
    return "Status code not found";
  }

  return existStatusCode;
};

const add = async (payload: statusCodeInterface) => {
  const code = payload.code;

  const existStatusCode = await StatusCodeModel.findOne({
    code: code,
    name: payload.name,
  });

  if (existStatusCode) {
    return "Status code already exist";
  }

  const responseInsert = await StatusCodeModel.create(payload);
  await responseInsert.save();

  return responseInsert;
};

const edit = async (id: string, payload: statusCodeInterface) => {
  const validObjectId = id.match(/^[0-9a-fA-F]{24}$/);
  const responseUpdate = validObjectId
    ? await StatusCodeModel.findByIdAndUpdate(id, payload, { new: true })
    : "Status code not found";

  return responseUpdate;
};

const drop = async (id: string) => {
  const validObjectId = id.match(/^[0-9a-fA-F]{24}$/);

  const responseDelete = validObjectId
    ? await StatusCodeModel.findByIdAndDelete(id)
    : "Status code not found";

  return responseDelete;
};

export { show, showById, add, edit, drop };
