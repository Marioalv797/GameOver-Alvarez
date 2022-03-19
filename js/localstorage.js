//Almacenar en el LS
function guardarProductosLocalStorage()
{
    localStorage.setItem('carrito',JSON.stringify(carrito))
}

//Comprobar que hay elementos en el LS
function obtenerProductosLocalStorage()
{
    let productoLS;

    //Comprobar si hay algo en LS
    if(localStorage.getItem('carrito') === null)
        productoLS = [];
    
    else 
    {
        productoLS = JSON.parse(localStorage.getItem('carrito'))
        carrito = productoLS
        numCarrito.innerText = carrito.reduce((acc, el) => acc + el.cantidad, 0)
        precio.innerText = carrito.reduce((acc,el)=> acc + (el.precio * el.cantidad),0)
    }   
    return productoLS
}

//Mostrar los productos guardados en el LS
function leerLocalStorage()
{
    let productosLS, numLS;
    productosLS = this.obtenerProductosLocalStorage()
    productosLS.forEach(producto => {
        //Construir plantilla
        let div = document.createElement('div')
        div.className = 'productoEnCarrito'
        div.innerHTML =
        `
            <div><img src="${producto.img}"></div>
            <div class="texto">
            <h4>${producto.nombre}</h4> <br>
            <p>Precio: $${producto.precio}</p> <br>
            <p id = "cantidad${producto.id}">Cantidad: ${producto.cantidad}</p> <br>
            </div>
            <button class="boton-eliminar" id="btnEliminar${producto.id}"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        `
        carritoContenedor.appendChild(div)        

        eliminardelCarrito(producto)
    });

}