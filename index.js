const fetch = require("node:fetch");

let int = [60, 17, 49, 27, 44, 33, 15, 59, 122, 19, 29];

// Função para pegar um intervalo aleatório em milissegundos
const getRandomInterval = () => {
  const randomIndex = Math.floor(Math.random() * int.length);
  return int[randomIndex] * 1000; // Converte segundos para milissegundos
};

// Função para fazer a requisição
const makeRequest = () => {
  fetch("https://api.pushcut.io/E590P-N2UvN4UrU_CRAlQ/notifications/Aprovada")
    .then(response => response.json())
    .then(data => console.log("Requisição feita com sucesso!", data))
    .catch(error => console.error("Erro na requisição:", error));

  // Chama a função novamente após um intervalo aleatório
  setTimeout(makeRequest, getRandomInterval());
};

// Inicia o ciclo de requisições
makeRequest();
