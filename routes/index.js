const express = require("express");
const router = express.Router();

const userCtrl = require("../controller/user");

router.get("/user", userCtrl.getAllUsers);
router.post("/user", userCtrl.createUser);
router.put("/user/:id", userCtrl.updateUser);

module.exports = router;
