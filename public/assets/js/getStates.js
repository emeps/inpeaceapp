const stateSelect = document.querySelector("select[name='estado']");

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(res => res.json())
    .then(states => buildOptionState(states));

function buildOptionState(states){
    states.map( state => {
        const optionState = document.createElement('option')
        optionState.setAttribute('value', state.id)
        optionState.setAttribute('name', state.nome)
        optionState.innerText = state.nome
        stateSelect.append(optionState)
    })
}