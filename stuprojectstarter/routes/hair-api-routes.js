var db = require("../models");

module.exports = function(app) {
  // Get all examples
  
  
  
  app.get("/api/hairs", function(req, res) {
    db.Hair.findAll({}).then(function(dbHair) {
      res.json(dbHair);
    });
  });

  // Create a new example
  app.post("/api/hair", function(req, res) {
    db.Hair.create(req.body).then(function(dbHairs) {
      res.json(dbHairs);
    });
  });

  // Delete an example by id
  app.delete("/api/hair/:id", function(req, res) {
    db.Hair.destroy({ where: { id: req.params.id } }).then(function(dbHairy) {
      res.json(dbHairy);
    });
  });
};
