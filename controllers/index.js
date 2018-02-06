const express = require('express');
const router = new express.Router();

router.use('/films', require('./films'));

router.get('/', function(req, res){
  res.json({data: 'homepage'});
});

router.get('/about', function(req, res){
  res.json({data: 'information'});
});

module.exports = router;
