let formularioCrear = document.getElementById('formularioCrear');
let nombreProducto = document.getElementById('nombreProducto');
let descripcion = document.getElementById('descripcion');
let precio = document.getElementById('precio');
let categoria = document.getElementById('categoria');
let stock = document.getElementById('stock');
let imagen = document.getElementById('imagen');

formularioCrear.addEventListener('submit', e => {
     errorTexProducto.innerHTML = "";
        let error = ""

     if (nombreProducto.value.length < 5 || !isNaN (nombreProducto.value)){
          error += `<p class="error">El nombre debe tener al menos 5 caracteres </p>`
          entrar = true;
          }

          if (descripcion.value.length < 20){
            error += `<p class="error">La descripcion debe tener al menos 20 caracteres</p>`
            entrar = true;
            }
            if (precio.value.length < 1 || !isNaN){
                error += `<p class="error">EL campo precio no puede estar vacio</p>`
                entrar = true;
                }
                if (categoria.value.length == ''){
                    error += `<p class="error">La categoria no puede estar vacia</p>`
                    entrar = true;
                    }
                    if (imagen.value.length == ''){
                        error += `<p class="error">Adjunte una imagen</p>`
                        entrar = true;
                        }
          if (entrar) {
            e.preventDefault();
          errorTexProducto.innerHTML += error
          entrar=false;
     }
})
function uploadImage(obj){

     var uploadFile = obj.files[0];
     if (!window.FileReader) {
         alert('El navegador no soporta la lectura de archivos');
         image.value= null;
     }
     if (!(/\.(jpg|png|gif)$/i).test(uploadFile.name)) {
         alert('Solo aceptamos imagenes');
         image.value= null;
     }
 }
 