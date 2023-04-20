import { codeStatusEnum } from "../enums/statusCode.enum";
import { statusEnum } from "../enums/status.enum";
import { statusCodeInterface } from "../interfaces/statusCode.interfaces";
import { createDbConnection as db } from "../database/db";

const show = async (): Promise<statusCodeInterface[]> => {
  const dataa: statusCodeInterface[] = [
    {
      id: 1,
      code: 10,
      name: "Continue",
      codeStatus: codeStatusEnum.Successful,
      note: "",
      status: statusEnum.Active,
    },
    {
      id: 1,
      code: 10,
      name: "Continue",
      codeStatus: codeStatusEnum.Successful,
      note: "",
      status: statusEnum.Active,
    },
  ];
  const data:any = await db().each('select * from statusCode',(err,row)=>{
    if (err) {
     console.log(err);
    }
    console.log(row);
  })
  return data;
};

const showById = async () => {};

const add = async () => {};

const edit = async () => {};

const drop = async () => {};

export { show, showById, add, edit, drop };
