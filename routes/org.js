var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('org', {
        title: 'Organization Structure'
    });  //Using index.ejs as view
});

module.exports = router;
