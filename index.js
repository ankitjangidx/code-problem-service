
import express from "express";
import { PORT } from "./src/config/index.js";



const app = express();

//middlware
app.use(express.json());

app.get("/ping", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `problem service is alive `,
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
