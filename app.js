let amigos = [];

let campoInput = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function limparCampo(campo) {
  campo.value = "";
}

function adicionarAmigo() {
  let amigo = campoInput.value;
  if (amigo == null || amigo.trim() === "") {
    alert("Por favor, insira um nome!");
  } else {
    amigos.push(amigo);
    limparCampo(campoInput);
    atualizarLista();
  }
}

// Imprime a lista de amigos no console
console.log(listaAmigos);

limparCampo(campoInput);

function atualizarLista() {
  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("Lista de amigos vazia! Por favor, insira algum nome.");
  } else {
    let index = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[index];
    resultado.innerHTML = amigoSorteado;
  }
}
