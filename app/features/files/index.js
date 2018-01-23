var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res) {
  var path = './data/info.json';
  fs.readFile(path, 'utf8', function (err, data) {
    return res.json({
      data: data
    });
  });
});

module.exports = router;