const db = require("../db/db");

class ProductDAO {
  async findAll() {
    try {
      const result = await db("products").select();
      console.log("geta ll");
      return result;
    } catch (error) {
      console.error("Product DAO findAll:", error);
    }
  }

  async findById(id) {
    try {
      const result = await db("products").where({ id }).select();
      return result[0];
    } catch (error) {
      console.error("Product DAO findById:", error);
    }
  }

  /**
   *
   * @param {Object} data
   *
   */
  async create(data) {
    try {
      const result = await db("products").insert(data).returning("*");
      return result[0];
    } catch (error) {
      console.error("Product DAO create:", error);
    }
  }

  async paginate(page = 1, limit) {
    const offset = (page - 1) * limit;
    const result = await db("products").offset(offset).limit(limit);
    return result;
  }
}

module.exports = new ProductDAO();
