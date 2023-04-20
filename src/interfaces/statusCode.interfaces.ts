import { codeStatusEnum } from "../enums/statusCode.enum";
import { statusEnum } from "../enums/status.enum";

export interface statusCodeInterface {
  id?: number;
  code: number;
  name: string;
  codeStatus: codeStatusEnum;
  note: string;
  status: statusEnum;
}
