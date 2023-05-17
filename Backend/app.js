const express = require('express');
const app = express();
require('dotenv').config();

const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');

// Dependencias instaladas 
const logger = require('morgan');
const cors = require('cors');
// .setHeader('Access-Control-Allow-Origin', '*');

app.locals.JWT_SECRET = process.env.JWT_SECRET;

// Importamos los router de cada ruta para usarlos por la app
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');
const friendsRouter = require('./routes/friends');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*
Middlewares
Cada petición será evaluada por ellos
*/
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); //IMPORTANTE --> ponerlo antes de las rutas

/**
 Rutas de nuestros endpoints
 */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/auth', authRouter);
app.use('/friends', friendsRouter);



/**
 Error handlers
 */

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
