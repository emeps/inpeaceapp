const stateSelect = document.querySelector("select[name='estado']");

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((res) => {
        return res.json();
    })
    .then((states) => {
        buildOptionState(states)
    });

function buildOptionState(states){
    for (state of states) {
        stateSelect.innerHTML += `<option value ="${state.id}">${state.nome}</option>`;
    }
}