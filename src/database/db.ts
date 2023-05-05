import mongooseDB from "mongoose";
import { config } from "../helpers/config.helper";

mongooseDB.set("strictQuery", false);
const database: string | any = config.DB.mongoDB;

export async function connectToMongoDB(dbCon:string = database) {
  await mongooseDB
    .connect(database)
    .then(() => console.log("-- Database Connected --"))
    .catch((err) =>
      console.log("Something hapen trying to connect to the database:", err)
    );
}
