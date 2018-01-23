var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// Feature
var user = require('./features/user');
var files = require('./features/files');

// Root path
app.get('/', function (req, res) {
  return res.json({
    status: 'OK'
  });
});

// Using features
app.use('/user', user);
app.use('/files', files);

app.listen(port, function () {
  console.log('Node.js app is running on ' + port);
});