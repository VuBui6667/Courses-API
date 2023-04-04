const Course = require("../models/Course");
const { listMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] /
  home(req, res, next) {
    // res.render("home");

    // Course.find({})
    //   .then((courses) =>
    //     // res.render("home", { courses: listMongooseToObject(courses) })
    //     res.json(courses)
    //   )
    //   .catch(next);
    res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
