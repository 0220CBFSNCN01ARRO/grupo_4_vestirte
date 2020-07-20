 window.addEventListener('load', function() { 






const errorTex = document.getElementById('errorTex');






     nombre.addEventListener ('change', () => {
        const nombre = document.getElementById('nombre');
     if (nombre.value.length < 3 || !isNaN(nombre.value)) {
        document.getElementById('nombreVal');
        nombreVal.innerHTML = `<p class="error">Formato incorrecto para nombre </p>`
         
     }else{
        nombreVal.innerHTML = ``
     }
    })


    apellido.addEventListener ('change',(e) => {

        const apellido = document.getElementById('apellido');
     if (apellido.value.length < 3 || !isNaN(apellido.value)) {   
        document.getElementById('apellidoVal');
        apellidoVal.innerHTML = `<p class="error">Formato incorrecto para apellido </p>`
         
     }else{
         apellidoVal.innerHTML = ``
     }
     
    }) 

       email.addEventListener ('change', () => {
        const email = document.getElementById('email');
        const regular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
     if (regular.test(email.value) === false) {
        document.getElementById('emailVal');
        emailVal.innerHTML = `<p class="error">El email no es valido </p>`
         
     }
     else{
        emailVal.innerHTML = ``
     }
    }) 

    password.addEventListener ('change', () => {
        const password = document.getElementById('password');
     if (password.value.length < 7) {
        document.getElementById('passVal');
        passVal.innerHTML = `<p class="error" >password minimo 8 caracteres </p>`
          
     }else{
        passVal.innerHTML = ''
     }
    })

    


//funcion para validar imagenen
//Los criterios a validar serán
//Formato (jpg, png, gif)

function validarImagen(obj) {

     var uploadFile = obj.files[0];


     if (!window.FileReader) {
          alert('El navegador no soporta la lectura de archivos');
          image.value = null;
     }

     if (!(/\.(jpg|png|gif)$/i).test(uploadFile.name)) {
          alert('El archivo a adjuntar no es una imagen');
          image.value = null;

     } else {
          alert('Imagen correcta :)')


     }



}
const formulario = document.getElementById('formulario');
formulario.addEventListener ('submit', (e) => {
    
   
        const image = document.getElementById('image');
     if (image.value === "" || password.value===""|| email.value===""||apellido.value===""||nombre.value==="") {
        e.preventDefault()
        errorTex.innerHTML = `<p class="error">Todos lo campos son obligatorios </p><br>`
         
     }else{
        formulario.addEventListener ('submit', () => {
            errorTex.innerHTML = ``
     })
    }
        
})
 }) 