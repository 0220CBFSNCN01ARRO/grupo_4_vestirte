const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');



formulario.addEventListener('submit', (e)=>{

    let errores = [];

    if (nombre.value == ''){
        alert('completa el campo de nombre')
    }
    if (errores.length > 0){
        e.preventDefault();

        let ulErrores = document.querySelector ('div.errores ul')
        for (let index = 0; index < errores.length; index++) {

            ulerrores.innerHTML += '<li>'+ errores[index] + '</li>'
        }
    }

});