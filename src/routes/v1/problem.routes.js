import express from "express";
import { problemController } from "../../controllers/index.js";
const ProblemRouter = express.Router();
ProblemRouter.get("/ping", problemController.pingProblem);
ProblemRouter.get("/:id", problemController.getProblem);
ProblemRouter.get("/", problemController.getProblems);
ProblemRouter.post("/", problemController.addProblem);
ProblemRouter.delete("/:id", problemController.deleteProblem);
ProblemRouter.put("/:id", problemController.updateProblem);

export default ProblemRouter;
