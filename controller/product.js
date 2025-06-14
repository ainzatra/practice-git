const service = require("../service/product");

class ProductController {
  async getAll(req, res) {
    const result = await service.getAll(req.query);
    res.status(200).json(result);
  }
  async getById(req, res) {
    const { id } = req.body;
    const result = await service.getById(id);
    res.status(200).json(result);
  }
  async create(req, res) {
    const result = await service.create(req.body);
    res.status(201).json(result);
  }
  async paginate(req, res) {
    const result = await service.paginate(req.body);
    res.status(200).json(result);
  }
}

module.exports = new ProductController();
