const dotenv = require('dotenv');
dotenv.config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var todoRouter = require('./routes/todoRouter');
const cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let dbURL = 'mongodb://localhost:27017/tododb';

//Connect to database

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on the port ${process.env.PORT}`);
});
mongoose.connect(dbURL, { useNewUrlParser: true}, function(err){
  if(err) {
    console.log('Error connecting to: ', dbURL)
  }
  else {
    console.log('Connected to database: ' + dbURL)
  }
})


app.use('/todo', todoRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
