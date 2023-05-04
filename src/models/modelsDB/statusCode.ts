import { Schema, model } from "mongoose";
import { statusCodeInterface } from "../../interfaces/statusCode.interfaces";

const StatusCodeSchema = new Schema<statusCodeInterface>(
  {
    code: {
      type: Number,
      required: [true, "Code is required"],
    },
    name: { type: String, required: [true, "Name is required"] },
    codeStatus: {
      type: String,
      required: [true, "CodeStatus is required"],
    },
    note: { type: String, required: [false, "Status is required"] },
    status: { type: String, required: [true, "Status is required"] },
  },
  { timestamps: true }
);

export const StatusCodeModel = model<statusCodeInterface>(
  "StatusCode",
  StatusCodeSchema
);
