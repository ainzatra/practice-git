const express = require("express");
const router = express.Router();

const userCtrl = require("../controller/user");
const userAuth = require("../middlewares/userAuth");

router.get("/user", userCtrl.getAllUsers);
router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);
router.put("/user/:id", userCtrl.updateUser);
router.get("/protected", userAuth, async (req, res) => {
  res.status(200).send("Hello there, this is a protected route.");
});

module.exports = router;
