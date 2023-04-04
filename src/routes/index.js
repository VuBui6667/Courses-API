const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);

  app.use("/", siteRouter);

  // app.post("/search", (req, res) => {
  //   return res.send("");
  // });
}

module.exports = route;