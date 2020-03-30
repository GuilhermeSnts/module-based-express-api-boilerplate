const index = require("../actions/index.js");
const findById = require("../actions/find-by-id.js");

module.exports = app => {
  app.get("/users", (req, res) => {
    let data = index();
    res.send(data);
  });

  app.get("/users/:id", (req, res) => {
    let data = findById(req.params.id);
    res.send(data);
  });

  app.post("/users/a", (req, res) => {
    res.send("posted");
  });
};
