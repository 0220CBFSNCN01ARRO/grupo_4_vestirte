module.exports={

root:(req, res, next) =>{
res.render('index')
},

productos:(req, res, next) =>{
res.render('productos')
},

carrito:(req, res, next) =>{
res.render('carrito')
},
admin:(req, res, next) =>{
res.render('admin')
},

detalles:(req, res, next) =>{
res.render('detalles')
},

formulario:(req, res, next) =>{
res.render('formulario')
},

login:(req, res, next) =>{
res.render('login')
}



}
