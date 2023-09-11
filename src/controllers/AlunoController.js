import Aluno from "../models/Aluno";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.send(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID inválido']
        })
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno inválido']
        })
      }

      return res.json(aluno)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID inválido']
        })
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno inválido']
        })
      }

      await aluno.destroy();

      return res.json({
        apagado: true
      })
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.json(aluno)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
   }
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID inválido']
        })
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno inválido']
        })
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.json(alunoAtualizado)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
   }
}

export default new AlunoController();
