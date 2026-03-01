import { StatusCodes } from "http-status-codes";
import { ProblemRepository } from "../repositories/problem.repository.js";
import { ProblemService } from "../services/problem.service.js";
import { NotImplemented } from "../errors/notImplemented.error.js";

const problemService = new ProblemService(new ProblemRepository());

function pingProblem(req, res) {
  res.status(StatusCodes.OK).json({
    message: `problem controller is up`,
  });
}
async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}
async function getProblem(req, res) {
  try {
    console.log("getProblem",req.param)
    const problem = await problemService.getProblem(req.param.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all the problems",
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}
async function getProblems(req, res) {
  try {
    const problems = await problemService.getProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all the problems",
      error: {},
      data: problems,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res) {
  try {
    const deletedProblem = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted the problem",
      error: {},
      data: deletedProblem,
    });
  } catch (error) {
    next(error);
  }
}
function updateProblem(req, res) {
  try {
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next();
  }
}

export {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblem,
};
