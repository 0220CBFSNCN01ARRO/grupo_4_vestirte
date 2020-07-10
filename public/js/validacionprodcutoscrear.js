window.addEventListener('load', function () {
    let formulario = document.getElementById('formulario');
    let nombre = document.getElementById('nombre');

    formulario.addEventListener('submit', () => {
   

       /*  if (nombre.value == '') {
           formulario.querySelector('label').innerHTML = 'Samu, estas aca!'
        } */


        let errores = [];

        if (nombre.value == '') {
            errores.push('completa el campo de nombre')
        } else if (nombre.value.length < 3) {
            errores.push('Debe tener al menos 3 caracteres')
        };
        if (errores.length > 0) {
            evento.preventDefault();
            let ulErrores = document.querySelector('div.errores ul')
            for (let index = 0; index < errores.length; index++) {

                ulErrores.innerHTML = '<li>' + errores[index] + '</li>'

            }
        }
    })
})