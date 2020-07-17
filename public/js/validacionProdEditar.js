window.addEventListener('load', function () {
    let formEditar = document.querySelector('form.formEditar')


    formEditar.addEventListener('submit', function (e) {

        ulerrores.innerHTML = "";
        let error = "";
        

        let nombre = document.querySelector('input.nombre')
        if (nombre.value.length < 5 || !isNaN(nombre.value)) {
            error += 'El campo nombre tiene que tener al menos 5 caracteres'
            entrar = true;
        };

        let descripcion = document.querySelector('input.descripcion')
        if (descripcion.value.length < 5) {
            error +='La descripcion no debe tener  menos de 20 caracteres'
            entrar = true;
        }

        let imagen = document.querySelector('input.imagen')
        if (imagen.value.length < 5) {
            error +='Debe adjuntar una imagen'
            entrar = true;
        }
        if (entrar) {
            e.preventDefault();
            let ulerrores = document.getElementById('errorTexEdit');
            ulerrores.innerHTML += error
            entrar=false;
       }
    })
})