var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');
var app = express();


app.use(express.static(__dirname + '/../client/dist'));

//
// app.get('/', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(200);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.post('/', function(req, res) {
  console.log(req.body);
  let description = req.body.description;
  let quantity = req.body.quantity !== undefined ? Number(req.body.quantity) : 1;

  if (!description) {
    res.sendStatus(400);
  } else {
    movies.insertOne(description, quantity, function(err, data) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(data);
      }
    })
  }
})

app.get('/', function(req, res) {
  movies.selectAll(function(err, result) {
    console.log(result);
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(result)
    }
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
