var models = require("../models");

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function(req, res) {
      Message.findAll({ include: [User] })
        .complete((err, results) => {
        if (err) {
          console.error(err);
        }
        res.json(results);
        });
      // *** Before ORM Refactor ***
      // models.messages.get((err, results) => {
      //   if (err) {
      //     console.error(err);
      //   }
      //   res.json(results);
      // });
    },
    post: function(req, res) {
      // a function which handles posting a message to the database
      User.findOrCreate({ username: req.body(username) })
        .complete((err, user) => {
          var params = {
            userID: user.id,
            message: req.body[message],
            roomname: req.body[roomname]
          };
          Message.create(params)
            .complete((err, results) => {
              if (err) {
                console.error(err);
              }
              res.sendStatus(201);
            });
        });
      // *** Before ORM Refactor ***
      // models.messages.post(params, (err, results) => {
      //   if (err) {
      //     console.error(err);
      //   }
      //   res.json(results);
      // });
    }
  },

  users: {
    get: function(req, res) {
      User.findAll()
        .complete((err, results) => {
          if (err) {
            console.error(err);
          }
          res.json(results);
        });
      // *** Before ORM Refactor ***
      // models.users.get((err, results) => {
      //   if (err) {
      //     console.error(err);
      //   }
      //   res.json(results);
      // });
    },
    post: function(req, res) {
      User.create({ username: req.body(username) })
        .complete((err, user) => {
          if (err) {
            console.error(err);
          }
          res.sendStatus(201);
        });
      // *** Before ORM Refactor ***
      // models.users.post(params, (err, results) => {
      //   if (err) {
      //     console.error(err);
      //   }
      //   res.sendStatus(201);
      // });
    }
  }
};
