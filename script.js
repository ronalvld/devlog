
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

const texto = document.createElement("span");
texto.textContent = textoTarea;

const botonCompletar = document.createElement("button");
botonCompletar.textContent = "Completar";

botonCompletar.addEventListener("click", function () {
    texto.classList.toggle("completada");
});

const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar";

botonEliminar.addEventListener("click", function () {
    nuevaTarea.remove();
});

nuevaTarea.appendChild(texto);
nuevaTarea.appendChild(botonCompletar);
nuevaTarea.appendChild(botonEliminar);

listaTareas.appendChild(nuevaTarea);


    entradaTarea.value = "";
});