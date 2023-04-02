class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:slug
  details(req, res) {
    res.send("DETAILS NEWS");
  }
}

module.exports = new NewsController();
