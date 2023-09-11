import Aluno from "../models/Aluno";

class AlunoController {
  async index(req, res) {
    const alunos = Aluno.findAll();
    res.send(alunos);
  }
}

export default new AlunoController();
