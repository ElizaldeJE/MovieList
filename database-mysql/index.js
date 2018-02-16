var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hisoka22',
  database: 'review'
});



var selectAll = (callback) => {
  connection.query('SELECT * FROM movies', function(err, result, fields) {
    console.log(err);
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

var insertOne = (description, quantity, callback) => {
  connection.query('INSERT INTO movies (description, quantity) value (?,?)', [description, quantity], function(err, result, feilds) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
