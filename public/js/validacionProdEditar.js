window.addEventListener('load', function () {
    let formEditar = document.querySelector('form.formEditar')


    formEditar.addEventListener('submit', function (e) {
        let errores = [];

        let nombre = document.querySelector('input.nombre')
        if (nombre.value.length < 5 || !isNaN(nombre.value)) {
            errores.push('El campo nombre tiene que tener al menos 5 caracteres')
        };

        let descripcion = document.querySelector('input.descripcion')
        if (descripcion.value.length < 5) {
            errores.push('La descripcion no debe tener  menos de 20 caracteres')
        }

        let imagen = document.querySelector('input.imagen')
        if (imagen.value.length < 5) {
            errores.push('Debe adjuntar una imagen')
        }


        if (errores.length > 0) {
            e.preventDefault();

            let ulerrores = document.querySelector('div .error ul');

            errores.forEach(issues => {
                ulerrores.innerHTML += '<li>' + issues + '</li>'
            });
        }
    })
})