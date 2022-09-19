const URL_REGIOES = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';

const urlEstados = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`;

const urlCidades = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`;

fetch(URL_REGIOES)
    .then(response => response.json())
    .then(data => {
        data.map(cadaResult => { 
            regiao.innerHTML += `<option value="${cadaResult.id}">${cadaResult.nome}</option>`;
        });
    });

regiao.addEventListener('change', () => {
    estado.innerHTML = '<option>-- Selecione --</option>';

    fetch(urlEstados(regiao.value))
        .then(response => response.json())
        .then(dados => {
            dados.map(est => {
                estado.innerHTML += `<option value="${est.id}">${est.nome}</option`;
            })
        });
});

estado.addEventListener('change', () => {
    cidade.innerHTML = '<option>-- Selecione --</option>';

    fetch(urlCidades(estado.value))
        .then(response => response.json())
        .then(dados => {
            dados.map(cid => {
                cidade.innerHTML += `<option>${cid.nome}</option>`
            })
        }); //select2
})