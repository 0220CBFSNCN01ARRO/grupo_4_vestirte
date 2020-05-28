//***MODULE REQUIRE***//
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override');

//***ROUTERS***//
const indexRouter = require('./routes/index');
const productosRouter = require ('./routes/productos');
const usuariosRouter = require('./routes/usuarios');
const carritoRouter = require('./routes/carrito');

//***EXPRESS EXECUTION***//
var app = express();

//***VIEW ENGINE***//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//***MIDDLEWARES***//
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));

//***ROUTES***//
app.use('/', indexRouter);
app.use('/productos', productosRouter);
app.use ('/usuarios', usuariosRouter);
app.use ('/carrito', carritoRouter);

//***OTHER***//
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
