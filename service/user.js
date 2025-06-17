const userDAO = require("../dao/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UserService {
  async getAllUsers() {
    const users = await userDAO.findAll();
    return users;
  }

  async register({ name, email, phone, password }) {
    try {
      if (await userDAO.findByEmail(email)) return false;
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await userDAO.insert(name, email, phone, hashedPassword);
      return result;
    } catch (error) {
      console.error("User Service Register:", error);
    }
  }

  async login({ email, password }) {
    try {
      const user = await userDAO.findByEmail(email);

      if (!user) return false;

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return false;

      const token = jwt.sign({ name: user.name }, process.env.JWT_SECRET, {
        expiresIn: "1m",
      });
      return token;
    } catch (error) {
      console.error("User Service Login:", error);
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
