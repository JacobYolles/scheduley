var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/hair", function(req, res) {
    db.Hair.findAll({}).then(function(dbHair) {
      res.json(dbHair);
    });
  });

  // Create a new example
  app.post("/api/hair", function(req, res) {
    db.Hair.create(req.body).then(function(dbHair) {
      res.json(dbHair);
    });
  });

  // Delete an example by id
  app.delete("/api/hair/:id", function(req, res) {
    db.Hair.destroy({ where: { id: req.params.id } }).then(function(dbHair) {
      res.json(dbHair);
    });
  });
};
