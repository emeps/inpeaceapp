const fullName = document.querySelector('#nome');
const email = document.querySelector('#email');
const password = document.querySelector('#senha');
const validatePassword = document.querySelector('#confirmar-senha');
const select = document.querySelector('select');

const labelMasc= document.querySelector('.masc')
const labelFem= document.querySelector('.fem')
const labelOthers= document.querySelector('.others')

const form = document.querySelector('form');
const divContainerForm = document.querySelector('.container-form');
const message = document.createElement('p');

let arrayError  = []

form.addEventListener('submit', (event) => {
    
    //Verifica todos os campos
    isFullnameValid() 
    isEmailValid() 
    isStateValid() 
    isSexValid()
    isPasswordValid() 
    isValidatedPasswordValid();
    isPasswordMatch() 

    // Verifica se tem algum erro
    if(!arrayError.length){
        location.href = 'http://127.0.0.1:5500/index.html'
    }else{
        divContainerForm.appendChild(message)
        message.innerText = 'Existem campos inválidos. Verifique!'
        message.style.color = 'red';
        arrayError.map(item => {
            alert(item)
            console.error(item)
            arrayError = []
        }) 
    }
    event.preventDefault();

});

// Remove a propriedade CSS dos campos
email.addEventListener('click', (e) => {
    // Remove os estilos dos erros exibidos
    email.style.border = '1px solid var(--primary)';
});
password.addEventListener('click', (e) => {
    // Remove os estilos dos erros exibidos
    password.style.border = '1px solid var(--primary)';
});
validatePassword.addEventListener('click', (e) => {
    // Remove os estilos dos erros exibidos
    validatePassword.style.border = '1px solid var(--primary)';
});
fullName.addEventListener('click', (e) => {
    // Remove os estilos dos erros exibidos
    fullName.style.border = '1px solid var(--primary)';
});
select.addEventListener('click', (e) => {
    // Remove os estilos dos erros exibidos
    select.style.border = '1px solid var(--primary)';
});
form.addEventListener('click', (e) => {
    // Remove os estilos dos erros exibidos
    labelFem.style.color = 'var(--primary)';
    labelMasc.style.color = 'var(--primary)';
    labelOthers.style.color = 'var(--primary)';
});

// Funções de validações
function isEmailValid() {
    const emailRegex = /^[a-z0-9.]+@+[a-z0-9. ]+$/;
    if (!emailRegex.test(email.value)) {
        arrayError.push('Email inválido')
        email.style.border = '1px solid red';
        return false;
    }
    return true;
}

function isPasswordValid() {
    if (password.value.length < 6) {
        arrayError.push('Senha inválida!')
        password.style.border = '1px solid red';
        return false;
    }
    return true;
}

function isPasswordMatch() {
    if (!(password.value === validatePassword.value)) {
        password.style.border = '1px solid red';
        validatePassword.style.border = '1px solid red';
        arrayError.push('Senha não são iguas!')
        return false;
    }
    return true;
}

function isValidatedPasswordValid() {
    if (validatePassword.value.length < 6) {
        validatePassword.style.border = '1px solid red';
        return false;
    }
    return true;
}

function isStateValid() {
    if (select.options[select.selectedIndex].value === '0') {
        select.style.border = '1px solid red';
        arrayError.push('Estado inválido!')
        return false;
    }
    return true;
}

function isFullnameValid() {
    const fullNameRegex = /^([a-zA-Zà-úÀ-Ú0-9]|-|_|\s)+$/;
    if (!fullNameRegex.test(fullName.value)) {
        fullName.style.border = '1px solid red';
        arrayError.push('Nome inválido')
        return false;
    }
    return true;
}

function isSexValid(){
    if(document.getElementById('masculino').checked){
        return true
    }else if (document.getElementById('feminino').checked){
        return true
    }else  if (document.getElementById('outros').checked){
        return true
    }else{
        arrayError.push('Nenhum sexo marcado')
        labelMasc.style.color = 'red';
        labelFem.style.color = 'red';
        labelOthers.style.color = 'red';
        return false
    }
}