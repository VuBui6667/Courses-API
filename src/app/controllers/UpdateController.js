const Course = require("../models/Course");

class UpdateController {
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.json(req.body))
      .catch(next);
  }
}

module.exports = new UpdateController();
