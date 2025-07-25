// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const lista = document.querySelector(".name-list");

function agregarAmigo() {
  const input = document.getElementById("amigo");

  const amigoTemp = input.value.trim();
  if (amigoTemp === "") {
    alert("Ingresa un nombre válido");
    return;
  }
  if (amigos.find((amigo) => amigo === amigoTemp)) {
    input.value = "";
    alert("Amigo ya ingresado");
    return;
  }

  amigos.push(amigoTemp);
  lista.innerHTML += `<li>${amigoTemp}</li>`;
  input.value = "";
  return;
}

function sortearAmigo() {
  if (isEmpty()) {
    alert("Debes agregar amigos antes")
    return;
  }

  const labelResultado = document.getElementById("resultado");
  const amigoElegido = parseInt(Math.random() * amigos.length);
  lista.innerHTML = "";
  labelResultado.innerHTML = `El amigo secreto es: ${amigos[amigoElegido]}`;
  return;
}

function isEmpty() {
    return amigos.length === 0;
}
