 window.addEventListener('load', function() {

    let email = document.getElementById('emailLogin') 
    

    let password = document.getElementById('passwordLogin')
   

   let error = ""

    email.addEventListener ('change', e => {
        if (email.value.length < 4 ) {
            if (error != 'a') {
            let errormail=document.getElementById('errormail');
            error = "a";
            return errormail.innerHTML += `<p >Formato incorrecto para mail</p>`}
            }
        })

    password.addEventListener ('change', e => {
        if (password.value.length < 3) {
            if (error != 'b') {
                let errorpass=document.getElementById('errorpass');
                error = "b"
                return errorpass.innerHTML = `<p >Contraseña muy corta </p>`}
    }
    
    })
})