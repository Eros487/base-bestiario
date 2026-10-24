// Listas de imágenes
const listaCabezas = [
  "assets/img/cabeza1.jpeg",
  "assets/img/cabeza2.avif",
  "assets/img/cabezauva3.png",
  "assets/img/cerezas1.png",
];
const listaTroncos = [
  "assets/img/tronco1.jpeg",
  "assets/img/tronco2.avif",
  "assets/img/tronco3.png",
  "assets/img/cerezas2.png",
];
const listaPatas = [
  "assets/img/patas1.jpeg",
  "assets/img/patas2.avif",
  "assets/img/patas3.png",
  "assets/img/cerezas3.png",
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
  const r1 = numeroAleatorio(0, listaCabezas.length);
  const r2 = numeroAleatorio(0, listaTroncos.length);
  const r3 = numeroAleatorio(0, listaPatas.length);

  cabeza.src = listaCabezas[r1];
  tronco.src = listaTroncos[r2];
  patas.src = listaPatas[r3];

  // Si son 3 iguales - NO IMPORTA CUAL
  if (r1 === r2 && r2 === r3) {
    
    // ESTO ES EL CONFETI
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#FFFF00']
      });
    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }
  )
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();

}