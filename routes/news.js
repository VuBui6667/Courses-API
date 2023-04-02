const express = require("express");
const router = express.Router();

const newsController = require("../src/app/controllers/NewsController");

router.get("/:slug", newsController.details);
router.get("/", newsController.index);

module.exports = router;
