const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use('/public',express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  // res.send("hello world!");
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send("successful posted data!");
})

app.get('/example', (req, res) => {
  res.send('hitting example route');
})

app.get('/example/:name/:age', (req, res) => {
  console.log(req.params);
  // res.send('example with route params');
  // http://localhost:3000/example/jack/20?tutorial=paramstutorial&sort=byage
  console.log(req.query);
  res.send(req.params.name + ':' + req.params.age);
})

app.listen(3000);