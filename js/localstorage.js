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
    let productosLS
    productosLS = this.obtenerProductosLocalStorage()
    productosLS.forEach(producto => {
        //Construir Carrito
        agregaralCarrito(producto)  
        eliminardelCarrito(producto)
    });
}