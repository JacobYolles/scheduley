let db = require("../models");



module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Hair.findAll({}).then(function(dbHair) {
      res.render("indexone", {
        msg: "Welcome to Scheduley!",
        hair: dbHair  
      });
    });
  });

  

  app.get("/client", function(req, res) {
    db.Hair.findAll({}).then(function(dbHair) {
      res.render("client", {
        msg: "Welcome to the Client side!",
        hair: dbHair  
      });
    });
  });

  // Load hair page and pass in an hair product by id
  app.get("/hair/:id", function(req, res) {
    db.Hair.findOne({ where: { id: req.params.id } }).then(function(dbHairs) {
      // res.render service page.
      res.render("hairservice", {
        hair: dbHairs
      });
    });
  });

  app.get("/hair/hair/:id", function(req, res) {
    db.Hair.findOne({ where: { id: req.params.id } }).then(function(dbHairs) {
   
    res.render("confirmation", {
      hair: dbHairs
    })
  })
  })
  

  // res.render("confirmation", {
  //   hair: dbHairy
  // });
  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
