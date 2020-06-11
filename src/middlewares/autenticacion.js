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