const form = document.querySelector('form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const message = document.createElement('span')
const divContainerForm = document.querySelector('.container-form')

email.addEventListener('click', e => {
    // Remove os estilos dos erros exibidos
    email.style.border = '1px solid var(--primary)'
    divContainerForm.removeChild(message)
})
password.addEventListener('click', e => {
    // Remove os estilos dos erros exibidos
    password.style.border = '1px solid var(--primary)'
    divContainerForm.removeChild(message)
})

form.addEventListener('submit', event =>{
    if(isEmailValid() && isPasswordValid()){
        // Salva a o email e a senha na sessionStorage. (Ps: A senha não precisa ser salva.)
        sessionStorage.setItem('user', email.value)
        sessionStorage.setItem('password', password.value)
        // Redireciona para a pagina de listagem de usuarios
        location.href = 'http://127.0.0.1:5500/pages/lista-usuarios.html'
    }

    // Validação caso ambos os campos não sejam preenchidos corretamente
    if(!isEmailValid() && !isPasswordValid()){
        divContainerForm.appendChild(message)
        message.innerText = 'Email e senha inválidos'
        message.style.color = 'red'
    }
    event.preventDefault()
})

// Verifica se o email é valido
function isEmailValid(){
    const emailRegex = /^[a-z0-9.]+@+[a-z0-9. ]+$/;
    if(!emailRegex.test(email.value)) {
        divContainerForm.appendChild(message)
        message.innerText = 'Email inválido'
        message.style.color = 'red'
        email.style.border = '1px solid red'
        return false;
    }
    return true
}

// Verifica se a senha é valida
function isPasswordValid(){
    if(password.value.length < 6) {
        divContainerForm.appendChild(message)
        message.innerText = 'Senha inválida!'
        message.style.color = 'red'
        password.style.border = '1px solid red'
        return false;
    }
    return true
}