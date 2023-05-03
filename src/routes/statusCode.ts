import { Router } from "express";
import {
  showRows,
  showOne,
  insert,
  update,
  dropOne,
} from "../controllers/statusCode.controller";
// import { payloadCategory } from "../middlewares/payload-validate.middleware";
// import { checkJwt } from "../middlewares/session.middleware";
// import { checkRol } from "../middlewares/rol.middleware";
// import { Rol } from "../enums/rol.enum";

const router = Router();

router.get("/", showRows);
router.get("/:id", showOne);
router.post("/", insert);
// router.put("/:id", putOne);
// router.delete("/:id", deleteOne);

export { router };
