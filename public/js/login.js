// window.addEventListener('load', function() {
//     let loginform=document.querySelector('form.loginform')

//     console.log (loginform);
    
//     loginform.addEventListener('submit', function (e){
        
//         let errores = [];

//         let email = document.querySelector('input.email')
//         if (email.value == "") {errores.push ('El campo de email tiene que estar completo')}

//         let password = document.querySelector('input.password')
//         if (password.value == "") {errores.push ('El campo de password tiene que estar completo')}

//         if (errores.length > 0){
//             e.preventDefault();

//             let ulerrores=document.querySelector('div .errores ul');

//             errores.forEach(element => {
//                 ulerrores.innerHTML += '<li>' + element + '</li>'
//             });
//         }
//     })
// })