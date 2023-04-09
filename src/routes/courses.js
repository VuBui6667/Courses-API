const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.delete("/:id/delete", courseController.delete);
router.get("/:slug", courseController.course);

module.exports = router;
