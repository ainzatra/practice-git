const express = require("express");
const router = express.Router();

const userCtrl = require("../controller/user");
const productCtrl = require("../controller/product");

router.get("/user", userCtrl.getAllUsers);
router.post("/user", userCtrl.createUser);
router.put("/user/:id", userCtrl.updateUser);

router.get("/product", productCtrl.getAll);
router.get("/product/:id", productCtrl.getById);
router.post("/product", productCtrl.create);

module.exports = router;
