var models = require('../models');

module.exports = {
  messages: { // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          console.error(err);
        }
        res.json(results);
      });
    },
    post: function (req, res) { // a function which handles posting a message to the database
      var params = [req.body.username, req.body.message, req.body.roomname];
      models.messages.post(params, (err, results) => {
        if (err) {
          console.error(err);
        }
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          console.error(err);
        }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, (err, results) => {
        if (err) {
          console.error(err);
        }
        res.sendStatus(201);
      });
    }
  }
};

