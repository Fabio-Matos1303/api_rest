import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Fábio",
      sobrenome: "Matos",
      email: "fabiosmo123@gmail.com",
      idade: 25,
      peso: 70,
      altura: 1.70
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
