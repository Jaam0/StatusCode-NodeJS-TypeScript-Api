import { Router } from "express";
import {
  showRows,
  showOne,
  insert,
  update,
  dropOne,
} from "../controllers/statusCode.controller";
import {
  validateBody,
  validateParams,
} from "../middlewares/payload-validation.middleware";
import {
  StatusCodeDto,
  StatusCodeObjectIdDto,
} from "../models/dto/statusCode.dto";
import { checkJwt } from "../middlewares/session.middleware";
import { checkRol } from "../middlewares/rol.middleware";
import { rolEnum } from "../enums/rol.enum";

const router = Router();

router.get("/", showRows);
router.get(
  "/:id",
  [checkJwt, checkRol(Object.values(rolEnum))],
  validateParams(StatusCodeObjectIdDto),
  showOne
);
router.post(
  "/",
  [
    checkJwt,
    checkRol([rolEnum.Admin, rolEnum.Editor]),
    validateBody(StatusCodeDto),
  ],
  insert
);
router.put(
  "/:id",
  [
    checkJwt,
    checkRol([rolEnum.Admin, rolEnum.Editor]),
    validateBody(StatusCodeDto),
  ],
  update
);
router.delete(
  "/:id",
  [
    checkJwt,
    checkRol([rolEnum.Admin, rolEnum.Editor]),
    validateParams(StatusCodeObjectIdDto),
  ],
  dropOne
);

export { router };
