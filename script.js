// Listas de imágenes
const listaCabezas = [
  "./assets/img/cabeza1.jpeg",
  "./assets/img/cabeza2.avif",
  "./assets/img/cabezauva3.png",
  "./assets/img/cerezas1.png",
];
const listaTroncos = [
  "./assets/img/tronco1.jpeg",
  "./assets/img/tronco2.avif",
  "./assets/img/tronco3.png",
  "./assets/img/cerezas2.png",
];
const listaPatas = [
  "./assets/img/patas1.jpeg",
  "./assets/img/patas2.avif",
  "./assets/img/patas3.png",
  "./assets/img/cerezas3.png",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const patas = document.getElementById("patas");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let patasAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  troncoAleatorio = numeroAleatorio(0, listaTroncos.length);
  patasAleatorio = numeroAleatorio(0, listaPatas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCabezas[cabezaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  tronco.src = `${listaTroncos[troncoAleatorio]}`;
  patas.src = `${listaPatas[patasAleatorio]}`;

  console.log(cabezaAleatorio, troncoAleatorio, patasAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();

