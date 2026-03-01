import { sanitizeMarkdownContent } from "../utils/markdownSanitizer.js";

export class ProblemService {
  constructor(ProblemRespository) {
    this.ProblemRespository = ProblemRespository;
  }

  async createProblem(problemData) {
    problemData.description = sanitizeMarkdownContent(problemData.description);
    const problem = await this.ProblemRespository.createProblem(problemData);
    return problem;
  }
  async getProblems() {
    return await this.ProblemRespository.getProblems();
  }
  async getProblem(id) {
    return await this.ProblemRespository.getProblem(id);
  }
  async deleteProblem(id) {
    return await this.ProblemRespository.deleteProblem(id);
  }
}
