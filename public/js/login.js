 window.addEventListener('load', function() {
    let email = document.getElementById('emailLogin')
    let password = document.getElementById('passwordLogin')
    let error = "";

    email.addEventListener ('change', e => {
        if (email.value.length < 4 ) {
            if (!error) {
            let errormail=document.getElementById('errormail');
            return errormail.innerHTML += `<p class="error">Formato incorrecto para mail</p>`}
            }
        })

    password.addEventListener ('change', e => {
        if (password.value.length < 3) {
            if (!error) {
                let errorpass=document.getElementById('errorpass');
                return errorpass.innerHTML += `<p class="error">Contraseña muy corta </p>`}
    }
    })
})