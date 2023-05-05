import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./helpers/swagger.doc";
/**
 * Ruta para acceder a las imagenes: http://localhost:3005/data/401f5ad2e91.png
 */
import { router } from "./routes/index";
import { connectToMongoDB } from "./database/db";

const app = express();
const PORT = process.env.PORT || 3006;
const TAG_SERVER = process.env.TAG_SERVER;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(`/${TAG_SERVER}`, express.static("public"));

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(router);

app.listen(PORT, async () => {
  console.log(`-- Server running on port:${PORT} --`);
  connectToMongoDB();
});
