const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    confirmPassword: () => document.getElementById('confirmPassword')
}

function createAccount() {
    const password = form.password().value
    const confirmPassword = form.confirmPassword().value
    if (confirmPassword != password) {
        // Exibir mensagem de "Senhas diferents!"
        window.alert('Algo deu errado, tente novamente.')
    }
    else if (confirmPassword === password) {
        // Realizar cadastro.
        cadastro()
    }    

}

function cadastro() {
    const email = form.email().value
    const password = form.password().value
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        window.alert("Login efetuado com sucesso!")
    }).catch(error => {
        window.alert(error)
    })
}

