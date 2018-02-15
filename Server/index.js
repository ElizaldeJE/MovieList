  const express = require('espress');
  const bodyParser = require('body-parser');
  const items = require('../database/data.js');
  const app = express();

  app.use(bodyParser.json());

  app.use(express.statis(__dirname + '/../client/dist'));

    app.get('/movies', function(req, res){
      console.log(rew.body);
      let description = req.body.description;
      let quantity - re.body.quantity !== undefined ? Number(req.body.quantity) : 1;

  if(!description){
    res.sendStatus(418);
  } else{
    movies.insertOne(description, quantity, function(err, data){
      if(err){
        res.sendStatus(500);
      } else{
        res.json(data);
      }
    })
  }
})

app.get('/movies', function(res, req){
  movies.selectAll(function(err, result){
    console.log(result);
    if(err){
      res.sendStatus(500);
    } else{
      res.json(result)
    }
  })
})

  app.listen(8080, function(){
    console.log('listening on port 8080');
  });
