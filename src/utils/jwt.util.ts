import { verify, sign } from "jsonwebtoken";
import { config } from "../helpers/config.helper";
const JWT_SECRET = config.jwt.jwtSecret;
const TOKEN_EXPIRE = config.jwt.tokenExpire;

const singToken = async (id: string, rol: string) =>
  sign({ id, rol }, JWT_SECRET, {
    expiresIn: TOKEN_EXPIRE,
  });

const verifyToken = (jwt: string) => verify(jwt, JWT_SECRET);

export { singToken, verifyToken };
