const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", adminController.getAddProducts);

router.get("/products", adminController.getProducts);

router.post("/products", adminController.postAddProducts);

module.exports = router;
