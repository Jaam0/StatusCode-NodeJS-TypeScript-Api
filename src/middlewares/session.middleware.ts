import { Response, NextFunction } from "express";
import { RequestExt } from "../interfaces/req-ext.interfaces";
import { verifyToken } from "../utils/jwt.util";

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser: any = verifyToken(`${jwt}`);

    if (!isUser) {
      res.status(401);
      res.send("YOU_DON'T_HAVE_A_VALID_TOKEN");
    } else {
      req.user = isUser;
      next();
    }
  } catch (err) {
    res.status(400);
    res.send("INVALID_SESSION");
  }
};

export { checkJwt };
