import { statusEnum } from "../enums/status.enum";
import { genderEnum } from "../enums/gender.enum";
import { rolEnum } from "../enums/rol.enum";

export interface userInterface {
  fullname: string;
  gender?: genderEnum;
  email: string;
  password: string;
  rol?: rolEnum;
  facebook?: boolean;
  google?: boolean;
  status: statusEnum;
}
