import express from "express";
import ProblemRouter from "./problem.routes.js";

const v1Router = express.Router();

v1Router.use("/problem", ProblemRouter);

export default v1Router;
