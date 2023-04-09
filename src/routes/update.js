const express = require("express");
const router = express.Router();

const updateController = require("../app/controllers/UpdateController");

router.put("/:id", updateController.update);

module.exports = router;
