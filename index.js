const express = require("express");
const consign = require("consign");
const app = express();

consign({ cwd: "src" })
  .include("config/middlewares.js")
  .then("auth")
  // .then("utils")
  .then("config/routes.js")
  .then("config/boot.js")
  .into(app);
