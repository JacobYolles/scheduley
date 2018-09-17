var db = require("../models");



module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Hair.findAll({}).then(function(dbhair) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbhair
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/hair/:id", function(req, res) {
    db.Hair.findOne({ where: { id: req.params.id } }).then(function(dbHair) {
      res.render("example", {
        example: dbHair
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
