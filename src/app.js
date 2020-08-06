//***MODULE REQUIRE***//
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const autenticacion = require ('./middlewares/autenticacion');

//***ROUTERS***//
const indexRouter = require('./routes/index');
const productosRouter = require ('./routes/productos');
const usuariosRouter = require('./routes/usuarios');
const carritoRouter = require('./routes/carrito');

/* Rutas api */
var productosApiRouter = require('./routes/api/productos' );
var usuariosApiRouter = require('./routes/api/usuarios' );
var dashboardApiRouter = require('./routes/api/dashboard' );
const { dirname } = require('path');
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
app.use(session({
  secret: 'vestirte',
  resave: false,
  saveUninitialized: true,
}));
app.use(autenticacion);

//***ROUTES***//
app.use('/', indexRouter);
app.use('/productos', productosRouter);
app.use ('/usuarios', usuariosRouter);
app.use ('/carrito', carritoRouter);
app.use('/dashboard',function (req,res){
    res.sendFile(path.resolve(__dirname,'/dashboard/build', 'index.html'))
});  
/* Rutas api */
app.use('/api/productos', productosApiRouter);
app.use('/api/usuarios', usuariosApiRouter);
app.use('/api/dashboard',dashboardApiRouter)
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
