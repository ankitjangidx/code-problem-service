import express from "express";
import { PORT } from "./src/config/server.config.js";
import apiRouter from "./src/routes/index.js";
import { connectToDb } from "./src/config/db.config.js";
import {errorHandler} from "./src/utils/index.js"


const app = express();

//middlware
app.use(express.json());

app.use("/api", apiRouter);

app.get("/ping", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `problem service is alive `,
  });
});
app.use(errorHandler);

app.listen(PORT, async() => {
  console.log(`server is listening on ${PORT}`);
  await connectToDb()

});
