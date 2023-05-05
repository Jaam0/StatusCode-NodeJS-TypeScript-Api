import { Response, NextFunction } from "express";
import { RequestExt } from "../interfaces/req-ext.interfaces";
import { verifyToken } from "../utils/jwt.util";

const checkRol =
  (roles: string[]) =>
  async (req: RequestExt, res: Response, next: NextFunction) => {
    try {
      const jwtByUser = req.headers.authorization || "";
      const jwt = jwtByUser.split(" ").pop();
      const isUser: any = verifyToken(`${jwt}`);

      if (roles.includes(isUser.rol)) {
        next();
      } else {
        res.status(409).send("You can't do that action - Acces denied");
      }
    } catch (err) {
      res.status(400);
      res.send("Invalid Session");
    }
  };

export { checkRol };
