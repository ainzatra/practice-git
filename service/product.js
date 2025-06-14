const dao = require("../dao/product");

class ProductService {
  async getAll(data) {
    const { page = null, limit = null } = data;

    if (page != null && limit != null) {
      return await dao.paginate(page, limit);
    } else {
      return await dao.findAll();
    }
  }
  async getById(id) {
    const product = await dao.findById(id);
    return product;
  }
  async create(data) {
    const { name, description, price, category } = data;
    if (!name || !price | !category) {
      return "All field are required";
    }
    const newProduct = await dao.create({ name, description, price, category });
    return newProduct;
  }
  async paginate(data) {
    const { page, limit } = data;
    const items = await dao.paginate(page, limit);
    return items;
  }
}

module.exports = new ProductService();
