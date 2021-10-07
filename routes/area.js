var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('area', {
        title: 'Working Area'

    });  //Using index.ejs as view
});

module.exports = router;