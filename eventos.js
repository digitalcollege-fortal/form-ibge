const URL_REGIOES = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';

fetch(URL_REGIOES)
    .then(response => response.json())
    .then(data => {
        data.map(cadaResult => {
            regiao.innerHTML += `<option>${cadaResult.nome}</option>`;
        });

    });

regiao.addEventListener('change', () => {
    alert('é agora');
});