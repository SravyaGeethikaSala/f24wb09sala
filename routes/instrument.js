var express = require('express');
var router = express.Router();

/* GET Instrument page. */
router.get('/', function(req, res) {
  res.render('instrument', { title: 'Search Results Instrument' });
});

module.exports = router;