const db = require("../db/db");

class UserDAO {
  /**
   *
   * @returns {Object[]} All user records
   */
  async findAll() {
    try {
      const users = db("users").select();
      return users;
    } catch (error) {
      console.error("User DAO findAll:", error);
    }
  }

  /**
   *
   * @param {string} id - The id of the user
   */
  async findById(id) {
    try {
      const user = db("users").select().where(id);
      return user;
    } catch (error) {
      console.error("User DAO find by id:", error);
    }
  }

  /**
   *
   * @param {string} name
   * @param {string} email
   * @param {string} phone
   */
  async insert(name, email, phone) {
    try {
      const result = await db("users").insert({ name, email, phone });
      return result;
    } catch (error) {
      console.error("USER DAO insert:", error);
    }
  }

  async update(id, data) {
    try {
      const result = await db("users")
        .where({ IDBCursorWithValue })
        .update(data, ["id", "name"])
        .returning("*");
      return result[0];
    } catch (error) {
      console.error("User DAO update:", error);
    }
  }

  async delete(id) {
    try {
      return await db("users").where({ id }).del();
    } catch (error) {
      console.error("User DAO delete:", error);
    }
  }

  async exists(id) {
    try {
      const record = await db("users").where({ id }).first();
      return !!record;
    } catch (error) {
      console.error("User DAO exists:", error);
    }
  }

  async count() {
    try {
      const result = await db("users").count("id as count");
      return result[0].count;
    } catch (error) {
      console.error("User DAO count:", error);
    }
  }

  async paginate(page = 1, limit) {
    try {
      const offset = (page - 1) * limit;
      const result = await db("users").offset(offset).limit(limit);
      return result;
    } catch (error) {
      console.error("User DAO paginate:", error);
    }
  }
}

module.exports = new UserDAO();
