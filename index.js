const d = document;
const displayValorAnterior = d.getElementById('valor-anterior');
const displayValorActual = d.getElementById('valor-actual');
const botonesNumeros = d.querySelectorAll('.numero');
const botonesOperadores = d.querySelectorAll('.operador');
const borrarSoft = d.querySelector('#btn-clear-soft');
const borrarHard = d.querySelector('#btn-clear-hard');


const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});


borrarSoft.addEventListener('click', () => display.borrar());
borrarHard.addEventListener('click', () => display.borrarTodo());
