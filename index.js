const tabela = document.querySelector('#tabela');

function getDados(url) {
    const request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();

    return request.responseText;
}

function criarLinha(moeda) {
    linha = document.createElement('tr');
    tdId = document.createElement('td');
    tdNome = document.createElement('td');
    // tdId.innerHTML = moeda.id;
    tdNome.innerHTML = moeda;
    
    console.log(moeda);

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;
}

(function main() {
    let data = getDados('http://economia.awesomeapi.com.br/json/last/USD-BRL');
    let moeda = JSON.parse(data);
    moeda = moeda.USDBRL;

    Object.keys(moeda).forEach(key => {
        let linha = criarLinha(key);
        tabela.appendChild(linha);
    });
})();