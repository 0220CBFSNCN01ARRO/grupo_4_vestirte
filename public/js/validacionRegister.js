const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password = document.getElementById('password');
const image = document.getElementById('image');
const formulario = document.getElementById('formulario');
const errorTex = document.getElementById('errorTex');
const regular =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


formulario.addEventListener('submit',e=>{
     errorTex.innerHTML="";
     e.preventDefault();
     let error="";


     if (nombre.value.length <3 || !isNaN (nombre.value)){
     error += `<p class="error">Formato incorrecto para nombre </p>` 
     entrar = true;
     }
     
     if (apellido.value.length <3 || !isNaN (apellido.value)){
          error += `<p class="error">Formato incorrecto para apellido </p>` 
          entrar = true;
     
          
          }
    
     if (regular.test(email.value)===false){
          /* alert('email no valido')} */
          error += `<p class="error">El email no es valido </p>` 
          entrar = true;

     }
     if (password.value.length <7){
          error += `<p class="error" >password minimo 8 caracteres </p>` 
          entrar = true;
     }
     if (image.value === "") {
          error += `<p class="error">no mando imagen </p><br>` 
          entrar = true;
          
 
      } 

     
     if(entrar){
          errorTex.innerHTML += error
          
     }
     
     

})

//funcion para validar imagenen
//Los criterios a validar serán
//Formato (jpg, png, gif)

function validarImagen(obj){
    
     var uploadFile = obj.files[0];
     
 
     if (!window.FileReader) {
         alert('El navegador no soporta la lectura de archivos');
         image.value= null;
     }
 
     if (!(/\.(jpg|png|gif)$/i).test(uploadFile.name)) {
         alert('El archivo a adjuntar no es una imagen');
         image.value= null;

     } 
     else {
          alert('Imagen correcta :)')  
          
       
      }

    
                    
 }
 //quitar texto por defecto file

 