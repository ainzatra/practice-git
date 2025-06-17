const userService = require("../service/user");
class UserController {
  async getAllUsers(req, res) {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  }
  async register(req, res) {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
      return res.status(400).json("All fields are required");
    }
    try {
      const user = await userService.register(req.body);
      if (!user) return res.status(409).json("Email is already used");
      res.status(201).json("User registered");
    } catch (error) {
      console.error("User Controller:", error);
      res.status(500).json("Something went wrong.");
    }
  }
  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("All fields are required");
    }
    try {
      const token = await userService.login(req.body);
      if (!token) return res.status(401).json("Invalid credentials");

      res.status(200).json({ token });
    } catch (error) {
      console.error("User Controller:", error);
      res.status(500).json("Something went wrong.");
    }
  }
  async updateUser(req, res) {
    console.log("req params", req.params);
    const { id } = req.params;
    const { name, email, phone } = req.body;
    if (!id || !name || !email || !phone) {
      return res.status(400).json("All fields are required");
    }
    try {
      const { id: updatedId, name: updatedName } = await userService.updateUser(
        id,
        {
          name,
          email,
          phone,
        }
      );
      res.status(201).json({
        message: "User updated successfully",
        id: updatedId,
        name: updatedName,
      });
    } catch (error) {
      console.error("User Controller:", error);
      res.status(500).json("Something went wrong.");
    }
  }
}

module.exports = new UserController();
