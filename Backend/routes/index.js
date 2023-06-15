const express = require('express');
const router = express.Router();

/* GET home page.  http://localhost:3000/ */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API REST - TECLA' });
});

module.exports = router;
