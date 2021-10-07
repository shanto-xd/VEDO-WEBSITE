var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var about = require('./routes/about');
var gallery = require('./routes/gallery');
var contact = require('./routes/contact');
var team = require('./routes/team');
var history = require('./routes/history');
var excom = require('./routes/excom');
var ongoing = require('./routes/ongoing');
var end = require('./routes/end');
var area = require('./routes/area');
var mission = require('./routes/mission');
var xcom = require('./routes/xcom');
var work = require('./routes/work');
var org = require('./routes/org');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', routes);
app.use('/gallery',gallery);
app.use('/contact',contact);
app.use('/about', about);
app.use('/history', history);
app.use('/team',team);
app.use('/excom',excom);
app.use('/ongoing',ongoing);
app.use('/end',end);
app.use('/area',area);
app.use('/mission',mission);
app.use('/xcom',xcom);
app.use('/work',work);
app.use('/org',org);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
