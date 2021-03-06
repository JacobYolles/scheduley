var db = require("../models");

module.exports = function(app) {
  // Get all examples
  
  
  
  app.get("/api/hair", function(req, res) {
    db.Hair.findAll({}).then(function(dbHair) {
      console.log(dbHair);
      res.json(dbHair);
      
    });
  });

app.get("/api/hair/:id", function(req, res) {
  db.Hair.findOne({ where: {id: req.params.id} }).then(function(dbHairs) {
      res.json(dbHairs);
  })
})
  

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
