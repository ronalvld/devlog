
const botonTema = document.getElementById("boton-tema");

botonTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-claro");
});

const formulario = document.getElementById("formulario-tarea");
const entradaTarea = document.getElementById("entrada-tarea");
const listaTareas = document.getElementById("lista-tareas");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const textoTarea = entradaTarea.value.trim();

    if (textoTarea === "") {
        return;
    }

    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = textoTarea;

    listaTareas.appendChild(nuevaTarea);

    entradaTarea.value = "";
});