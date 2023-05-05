import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";
import { validateBody } from "../middlewares/payload-validation.middleware";
import { AuthDto } from "../models/dto/auth.dto";
import { UserDto } from "../models/dto/user.dto";

const router = Router();

router.post("/signin", [validateBody(AuthDto)], signIn);
router.post("/signup", [validateBody(UserDto)], signUp);

export { router };
