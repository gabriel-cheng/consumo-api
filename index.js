const nomeMoeda = document.querySelector('#nome');
const valorMoeda = document.querySelector('#valor');
const time = document.querySelector('#time');

function getDados(url) {
    const request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    
    return request.response;
}

setInterval(() => {
    let data = getDados('http://economia.awesomeapi.com.br/json/last/USD-BRL');
    let moeda = JSON.parse(data);
    moeda = moeda.USDBRL;

    nomeMoeda.textContent = moeda.name;
    valorMoeda.textContent = moeda.bid
    time.textContent = moeda.create_date
}, 100);