import Aluno from "../models/Aluno";

class HomeController {
  index(req,res) {
    res.json({
      tudoCerto: true
    });
  }
}

export default new HomeController();
