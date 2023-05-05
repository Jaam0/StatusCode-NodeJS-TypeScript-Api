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
// import { payloadCategory } from "../middlewares/payload-validate.middleware";
// import { checkJwt } from "../middlewares/session.middleware";
// import { checkRol } from "../middlewares/rol.middleware";
// import { Rol } from "../enums/rol.enum";

const router = Router();

// routes/users.ts

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and retrieval
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns a list of statusCode
 *     tags: [StatusCode]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StatusCode'
 */
router.get("/", showRows);
router.get("/:id", validateParams(StatusCodeObjectIdDto), showOne);
router.post("/", validateBody(StatusCodeDto), insert);
router.put("/:id", validateBody(StatusCodeDto), update);
router.delete("/:id", validateParams(StatusCodeObjectIdDto), dropOne);

export { router };
