const userDAO = require("../dao/user");

class UserService {
  getAllUsers() {
    const users = userDAO.findAll();
    return users;
  }

  async createUser({ name, email, phone }) {
    try {
      const result = await userDAO.insert(name, email, phone);
      return result;
    } catch (error) {
      console.error("User Service:", error);
    }
  }
  async updateUser(id, updates) {
    try {
      const result = await userDAO.update(id, updates);
      userDAO.update();
      return result;
    } catch (error) {
      console.error("User Service update:", error);
    }
  }
}

module.exports = new UserService();
