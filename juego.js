// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Obtener los elementos del DOM
const inputNumero = document.getElementById("numero");
const botonAdivinar = document.getElementById("boton-adivinar");
const mensaje = document.getElementById("mensaje");

// Definir una función para verificar si el número es correcto
function verificarNumero() {
  // Obtener el número ingresado por el usuario
  const numero = parseInt(inputNumero.value);

  // Verificar si el número es correcto
  if (numero === numeroAleatorio) {
    mensaje.textContent = "¡Correcto! ¡Ganaste!";
  } else if (numero < numeroAleatorio) {
    mensaje.textContent = "El número es mayor. Sigue intentando.";
  } else {
    mensaje.textContent = "El número es menor. Sigue intentando.";
  }
}

// Agregar un evento al botón para verificar el número ingresado
botonAdivinar.addEventListener("click", verificarNumero);
