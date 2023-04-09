const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  course(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => res.json(course))
      .catch(next);
  }

  create(req, res, next) {
    res.render("create");
  }

  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }

  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.send("DELETE SUCCESSFUL"))
      .catch(next);
  }
}

module.exports = new CourseController();
