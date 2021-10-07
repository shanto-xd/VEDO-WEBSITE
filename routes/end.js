var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('end', {
        title: 'Ended Program'

    });  //Using index.ejs as view
});

module.exports = router;