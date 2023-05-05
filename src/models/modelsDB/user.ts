import { Schema, model } from "mongoose";
import { userInterface } from "../../interfaces/user.interfaces";

const UserSchema = new Schema<userInterface>(
  {
    fullname: {
      type: String,
      required: [true, "FullName is required"],
    },
    gender: { type: String, required: [false, "Gender is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: { type: String, required: [true, "Password is required"] },
    rol: { type: String, required: [true, "Rol is required"] },
    facebook: { type: Boolean, required: [true, "Facebook is required"] },
    google: { type: Boolean, required: [true, "Google is required"] },
    status: { type: String, required: [true, "Status is required"] },
  },
  { timestamps: true }
);

export const UserModel = model<userInterface>("User", UserSchema);
