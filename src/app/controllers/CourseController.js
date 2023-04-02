const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  course(req, res, next) {
    console.log(req.params.slug);

    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("course", { course: mongooseToObject(course) })
      )
      .catch(next);
  }
}

module.exports = new CourseController();
