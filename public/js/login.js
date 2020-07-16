 window.addEventListener('load', function() {
  

 
    let loginform=document.getElementById('formularioLogin')
    loginform.addEventListener('submit', e => {
    let email = document.getElementById('emailLogin') 
    let password = document.getElementById('passwordLogin')
    let ulerrores=document.getElementById('errorTexLogin');
    
    
    ulerrores.innerHTML = "";
    let error = "";
    if (password.value.length < 3 ) {
         error += `<p class="error">Contraseña muy corta </p>`
         entrar = true;
    }
    if (email.value.length < 3 ) {
         error += `<p class="error">Formato incorrecto para apellido </p>`
         entrar = true;
    }

    if (entrar) {
         e.preventDefault();
         
         ulerrores.innerHTML += error
    }
})
})