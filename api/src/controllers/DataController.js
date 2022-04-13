const Data = require("../models/Data")

class DataController {
  async store(req, res) {
    try {
      const newData = await Data.create(req.body);
      const { id, asn,titular,cnpj,pais,email } = newData;
      return res.json({ id, asn,titular,cnpj,pais,email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const dados = await Data.findAll({ attributes: ["id", "asn", "titular","cnpj","pais","email"] });
      return res.json(dados);
    } catch (e) {
      return res.json(null);
    }
  }
}

module.exports = new DataController();
