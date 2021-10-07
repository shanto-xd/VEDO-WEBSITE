var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('excom', {
        title: 'Executive Committee'

    });  //Using index.ejs as view
});

module.exports = router;
