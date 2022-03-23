const cardsSpace = document.getElementById('cards-space')
let carrito = []

cargarEventos ()

function cargarEventos () 
{
    document.addEventListener('DOMContentLoaded', leerLocalStorage());
    mostrarProductos(stock)
}