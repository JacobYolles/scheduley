var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/auto", function(req, res) {
    db.Auto.findAll({}).then(function(dbAuto) {
      res.json(dbAuto);
    });
  });

  // Create a new example
  app.post("/api/auto", function(req, res) {
    db.Auto.create(req.body).then(function(dbAuto) {
      res.json(dbAuto);
    });
  });

  // Delete an example by id
  app.delete("/api/auto/:id", function(req, res) {
    db.Auto.destroy({ where: { id: req.params.id } }).then(function(dbAuto) {
      res.json(dbAuto);
    });
  });
};
