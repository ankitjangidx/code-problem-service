function pingProblem(req, res) {
  res.status(200).json({
    message: `problem controller is up`,
  });
}
function addProblem(req, res) {}
function getProblem(req, res) {}
function getProblems(req, res) {}

function deleteProblems(req, res) {}
function updateProblems(req, res) {}

export {
  addProblem,
  getProblem,
  getProblems,
  deleteProblems,
  updateProblems,
  pingProblem,
};
