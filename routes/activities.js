var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('activities', {
        title: 'Activities'

    });  //Using index.ejs as view
});

module.exports = router;