import { Request, Response, NextFunction } from "express";
import { validate, ValidationError } from "class-validator";
import { plainToClass } from "class-transformer";

function validateBody<T>(type: {
  new (): T;
}): (req: Request, res: Response, next: NextFunction) => void {
  return async (req: Request, res: Response, next: NextFunction) => {
    const inst: any = new type();
    Object.assign(inst, req.body);
    const errors = await validate(inst);
    if (errors.length > 0) {
      const validationErrors = errors
        .map((error: ValidationError | any) => Object.values(error.constraints))
        .join(", ");
      return res.status(400).json({ message: validationErrors });
    }
    next();
  };
}

function validateParams<T>(type: {
  new (): T;
}): (req: Request, res: Response, next: NextFunction) => void {
  return async (req: Request, res: Response, next: NextFunction) => {
    const inst: any = plainToClass(type, req.params);
    const errors = await validate(inst);
    if (errors.length > 0) {
      return res.status(400).json({ message: errors });
    }
    next();
  };
}

export { validateBody, validateParams };
