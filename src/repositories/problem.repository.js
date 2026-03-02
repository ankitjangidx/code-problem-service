import { NotFound } from "../errors/notFound.error.js";
import { Problem } from "../models/index.js";
export class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      throw error;
    }
  }
  async getProblems() {
    try {
      return await Problem.find({});
    } catch (error) {
      throw error;
    }
  }
  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);

      if (!problem) {
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (error) {
      throw error;
    }
  }
  async deleteProblem(id) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(id);
      if (!deletedProblem) {
        throw new NotFound("problem", id);
      }
      return this.deleteProblem;
    } catch (error) {
      throw error;
    }
  }
}
