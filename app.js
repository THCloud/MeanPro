var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');      
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var sessionConf = require('./config/session-config.js');
var db = require('./config/db-config.js');

mongoose.connect(db.url);
mongoose.connection;


// routes. NOT FINISHED !!!
var routes = require('./app/routes/route.js');
var login  = require('./app/routes/login.js');
var admin = require('./app/routes/admin.js');
var tag = require('./app/routes/tag.js');
var task = require('./app/routes/task.js');


var app = express();
 

// for session.
app.use(session(sessionConf));


// view engine setup
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/login', login);
app.use('/admin', admin);
app.use('/tag', tag);
app.use('/task', task);


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
