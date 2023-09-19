class HomeController {
  async index(req, res) {
    res.json("Bem vindo à API");
  }
}

export default new HomeController();
