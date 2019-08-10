var Sequalize = requre('Sequelize');
var orm = new Sequalize('chat', 'root', '');
var mysql = require('mysql');

var User = orm.define('User', {
  username: Sequalize.STRING
});

var Message = orm.define('Message', {
  userid: Sequalize.INTEGER,
  message: Sequalize.STRING,
  roomname: Sequalize.String
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

module.exports(User) = User;
module.exports(Message) = Message;

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// *** Before ORM Refactor ***

// var mysql = require('mysql');

// var connect = mysql.createConnection({
//   user: "root",
//   password: "",
//   database: "chat"
// });

// connect.connect();

// module.exports = connect;