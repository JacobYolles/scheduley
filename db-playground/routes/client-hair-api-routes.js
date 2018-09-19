let db = require("../models");

module.exports = function (app) {

    app.get("/client", function(req, res) {
        db.Hair.findAll({}).then(function(dbHair) {
          res.render("client", {
            msg: "Welcome to the Client side!",
            hair: dbHair  
          });
        });
      });

    //   app.post("/client", function(req, res) {
    //     db.Hair.create(req.body).then(function(dbHair) {
    //       res.json(dbHair);
    //     });
    //   });

    //   app.post("/client/", function(req, res) {
    //     db.Hair.create([
    //       "service_provided", "days_provided", "current_price", "small_bio"
    //     ], [
    //       req.body.service_provided, req.body.days_provided, req.body.current_price, req.body.small_bio
    //     ], function(result) {
    //       // Send back the ID of the new quote
    //       res.json({ id: result.insertId });
    //     });
    //   });


      app.post("/api/hair", function(req, res) {
          console.log("Hi!")
          console.log(req.body)
        db.Hair.create(
            req.body
        ).then(function (result) {
          // Send back the ID of the new quote
          res.json({ id: result.insertId });
        });
      });

}