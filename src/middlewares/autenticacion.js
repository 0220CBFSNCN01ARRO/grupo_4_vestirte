//***USUARIOS UNPACK***//
const databaseUserPath = path.join(__dirname,'../data/usuarios.json');
let usuarios = JSON.parse(fs.readFileSync(databaseUserPath),'utf-8')




module.exports = (req,res,next) => {
    res.locals.user = false;

    if(req.session.user){
        res.locals.user = req.session.user
        console.log(req.session.user)
    } else if (req.cookies.usuario) {
      
        req.session.user = req.cookies.usuario;
        res.locals.user = req.cookies.usuario;
       
    } 
    next();
};