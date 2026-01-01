import express from "express";
import { PORT } from "./src/config/index.js";
import apiRouter from "./src/routes/index.js";

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

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
