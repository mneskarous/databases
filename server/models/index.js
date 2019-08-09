var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // fetch all messages
      // need id, message, roomname, and username
      var queryString = "select messages.id, messages.message, messages.roomname \
      from messages left outer join users on (messages.userID = users.id \
      order by messages.id desc";
      db.query(queryString, (err, results) => {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a message
      var queryString = "insert into messages(userID, message, roomname) \
      value (?, (select id from users where username = ? limit 1), ?)";
      db.query(queryString, params, (err, results) => {
        callback(err, results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // fetch all users
      var queryString = "select * from users";
      db.query(queryString, (err, results) => {
        callback(err, results)
      });
    },
    post: function (params, callback) {
      // create a user
      var queryString = "insert into users(username) values (?)";
      db.query(queryString, params, (err, results) => {
        callback(err, results);
      });
    }
  }
};