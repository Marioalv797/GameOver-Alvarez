const carritoContenedor = document.getElementById('carrito-contenedor');
const numCarrito = document.getElementById('numero')
const cardsSpace = document.getElementById('cards-space')
let precio = document.getElementById('precioTotal')
let carrito = []

cargarEventos ()

    function cargarEventos () {
        document.addEventListener('DOMContentLoaded', leerLocalStorage());
        mostrarProductos(stock)
}