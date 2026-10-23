
const boton = document.getElementById("boton-mensaje");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    mensaje.textContent = "¡Funciona! Acabo de ejecutar mi primer JavaScript.";
});
