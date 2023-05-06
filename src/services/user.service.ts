import { userInterface } from "../interfaces/user.interfaces";
import { UserModel } from "../models/modelsDB/user";
import { encrypt, verified } from "../utils/bcrypt.util";
import { rolEnum } from "../enums/rol.enum";
import { statusEnum } from "../enums/status.enum";
import { singToken } from "../utils/jwt.util";
import { isEmail } from "../utils/others.util";
import { sendEmail } from "../utils/nodemailer.util";
import { config } from "../helpers/config.helper";


const show = async (): Promise<userInterface[] | any> => {
  const userData = await UserModel.find({});

  if (userData.length === 0) {
    return "There is not data";
  }
  return userData;
};

const showById = async (id: string) => {
  const validObjectId = id.match(/^[0-9a-fA-F]{24}$/);

  const existUser = validObjectId
    ? await UserModel.findById(id)
    : "Invalid ObjectID";

  if (!existUser) {
    return "User not found";
  }

  return existUser;
};

const add = async (payload: userInterface) => {
  const email = payload.email;
  const correctEmail = isEmail(email);

  if (!correctEmail) return `${email} is not a valid email address`;

  const existUser = await UserModel.findOne({
    email: email,
  });

  if (existUser) {
    return "The account already exist";
  }

  const hashPwd = await encrypt(payload.password);
  const dataInsert: userInterface = {
    fullname: payload.fullname,
    gender: payload.gender,
    email: payload.email,
    password: hashPwd,
    rol: rolEnum.Reader,
    facebook: false,
    google: false,
    status: statusEnum.Active,
  };
  const responseInsert = await UserModel.create(dataInsert);
  await responseInsert.save();

  const bodyHtml = config.template.body.replace('@name',`${responseInsert.fullname}`);
  await sendEmail(
    `${responseInsert.email}`,
    "Welcome to StatusCode",
    "",
    `${bodyHtml}`
  );
  return "Account registered";
};

const edit = async (id: string, payload: userInterface) => {
  const validObjectId = id.match(/^[0-9a-fA-F]{24}$/);
  const responseUpdate = validObjectId
    ? await UserModel.findByIdAndUpdate(id, payload, { new: true })
    : "Status code not found";

  return responseUpdate;
};

const drop = async (id: string) => {
  const validObjectId = id.match(/^[0-9a-fA-F]{24}$/);
  const filter = { id: id };
  const responseDelete = validObjectId
    ? await UserModel.findOneAndUpdate(filter, { status: statusEnum.Inactive })
    : "User not found";

  return "Account was disable";
};

const login = async (email: string, password: string) => {
  const correctEmail = isEmail(email);

  if (!correctEmail) return `${email} is not a valid email address`;

  const userResponse: any = await UserModel.findOne({ email: email });

  if (!userResponse || userResponse.status === statusEnum.Inactive)
    return "Account not found";

  const correctPwd = await verified(password, userResponse.password);

  if (!correctPwd) return "Incorrect password";

  const token = await singToken(userResponse.id, userResponse.rol);

  return { user: userResponse, token: token };
};

export { show, showById, add, edit, drop, login };
