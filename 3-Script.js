// Array de participantes com "Criadores do sorteio"
let participantes = new Array(10).fill("Criadores do sorteio");

// Array para armazenar o histórico de cadastro
let historico = [];

// Adiciona participantes
function adicionarParticipante() {
    let nome = document.getElementById("nomeParticipante").value;
    let indice = parseInt(document.getElementById("indiceParticipante").value);

    if (indice !== 0 && nome !== "" && indice >= 1 && indice <= 10) {
        if (participantes[indice - 1] === "Criadores do sorteio") {
            participantes[indice - 1] = nome;
            let historicoItem = `${(indice < 10 ? '0' : '') + indice} - ${nome}`;
            historico.push(historicoItem);

            // Atualiza a exibição na página
            atualizarListaParticipantes();
            atualizarHistorico();
            salvarNoLocalStorage();
        } else {
            alert("O índice já está ocupado!");
        }
        } else {
            alert("Por favor, insira um número válido entre 1 e 10");
    }
}

// Sorteia um participante aleatoriamente
function sortearParticipante() {
    let indiceSorteado = Math.floor(Math.random() * 10);
    let participanteSorteado = participantes[indiceSorteado];
    
    if (participanteSorteado !== "Criadores do sorteio") {
        document.getElementById('infoParticipantes').innerHTML = `${participanteSorteado}`;
        document.getElementById('infoParticipantesNumero').innerHTML = ` ${(indiceSorteado < 9 ? '0' : '') + (indiceSorteado + 1)}`;
    } else {
        document.getElementById('infoParticipantes').innerHTML = `Nenhum participante foi adicionado nesse índice!`;
    }
}

// Atualiza a lista de participantes na página
function atualizarListaParticipantes() {
    let listaParticipantes = document.getElementById("listaParticipantes");
    listaParticipantes.innerHTML = "";
    participantes.forEach((participante, index) => {
        let li = document.createElement("li");
        li.textContent = `${(index < 9 ? '0' : '') + (index + 1)} - ${participante}`;
        listaParticipantes.appendChild(li);
  });
}

// Atualiza o histórico de cadastro na página
function atualizarHistorico() {
    let historicoCadastro = document.getElementById("historicoCadastro");
    historicoCadastro.innerHTML = "";
    historico.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        historicoCadastro.appendChild(li);
    });
}

// Salva os arrays no localStorage
function salvarNoLocalStorage() {
    localStorage.setItem("participantes", JSON.stringify(participantes));
    localStorage.setItem("historico", JSON.stringify(historico));
}

// Carrega os dados do localStorage, se existirem
function carregarDoLocalStorage() {
    let participantesSalvos = localStorage.getItem("participantes");
    let historicoSalvo = localStorage.getItem("historico");

    if (participantesSalvos !== null) {
        participantes = JSON.parse(participantesSalvos);
        atualizarListaParticipantes();
    }

    if (historicoSalvo !== null) {
        historico = JSON.parse(historicoSalvo);
        atualizarHistorico();
    }
}

// Carregar os dados do localStorage ao carregar a página
carregarDoLocalStorage();

// Recuperar a lista do armazenamento local
const nome = localStorage.getItem('nome');

if(localStorage.getItem('nome')){
    participantes = JSON.parse(localStorage.getItem('nome'));
}
console.log(participantes);