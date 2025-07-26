// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const lista = document.querySelector(".name-list");
const input = document.getElementById("amigo");

function agregarAmigo() {
  const amigoTemp = input.value;

  if (!amigoTemp) {
    alert("Ingresa un nombre válido");
    return;
  }

  if (repetido(amigoTemp)) {
    input.value = "";
    alert("Amigo ya ingresado");
    return;
  }

  insertarAmigo(amigoTemp);
  return;
}

function sortearAmigo() {
  isEmpty() ? alert("Debes agregar amigos antes") : mostrarElegido();
}

function isEmpty() {
  return amigos.length === 0;
}

function repetido(nombre) {
  return amigos.find((amigo) => amigo === nombre);
}

function insertarAmigo(nombre) {
  amigos.push(nombre);

  const amigo = document.createElement("li");
  amigo.textContent = nombre;

  lista.appendChild(amigo);
  input.value = "";
}

function mostrarElegido() {
  const labelResultado = document.getElementById("resultado");
  const amigoElegido = parseInt(Math.random() * amigos.length);
  lista.innerHTML = "";
  labelResultado.textContent = `El amigo secreto es: ${amigos[amigoElegido]}`;
  return;
}
