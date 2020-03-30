const cors = require("cors");
const helmet = require("cors");
const compression = require("compression");
const morgan = require("morgan");

module.exports = app => {
  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(morgan("dev"));
};
