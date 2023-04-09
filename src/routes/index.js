const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");
const updateRouter = require("./update");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/update", updateRouter);

  app.use("/", siteRouter);
}

module.exports = route;
