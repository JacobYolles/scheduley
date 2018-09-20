var db = require("../models");

module.exports = function(app) {
    // Get all examples

    app.get("/api/client", function(req, res) {
        db.Client.findAll({}).then(function(dbClient) {
          console.log(dbClient);
          res.json(dbClient);
          
        });
      });
    
    app.get("/api/client/:id", function(req, res) {
      db.Client.findOne({ where: {id: req.params.id} }).then(function(dbClients) {
          res.json(dbClients);
      })
    })
      
    
      // Create a new example
      app.post("/api/client", function(req, res) {
        db.Client.create(req.body).then(function(dbClients) {
          res.json(dbClients);
        });
      });
    
      // Delete an example by id
      app.delete("/api/client/:id", function(req, res) {
        db.Hair.destroy({ where: { id: req.params.id } }).then(function(dbHairy) {
          res.json(dbHairy);
        });
      });
    };
    