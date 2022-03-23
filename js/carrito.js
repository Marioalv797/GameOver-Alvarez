// AGREGAR ITEMS AL CARRITO
const numCarrito = document.getElementById('numero')
const carritoContenedor = document.getElementById('carrito-contenedor')
let precio = document.getElementById('precioTotal')

function alCarrito (id)
{
    let agregarCompra = stock.find (item => item.id == id)

    // VERIFICANDO EL PRODUCTO SI YA EXISTE EN EL CARRITO

    if (carrito.filter(el => el.id == id).length < 1)
    {
        carrito.push(agregarCompra)
        agregaralCarrito(agregarCompra)
    }

    else
    {        
        let repetido = carrito.find (el => el.id == id)
        repetido.cantidad++;
        document.getElementById(`cantidad${agregarCompra.id}`).innerHTML = 
        `
            <p id = "cantidad${agregarCompra.id}">Cantidad: ${repetido.cantidad}</p>
        `
    }

    Toastify({
        text: "🛒 Se añadió al carrito",
        duration: 2000,
        style:{
            background: "#f5e4bb",
            fontFamily: "Montserrat, sans-serif",
            color: "black"
        }
    }).showToast();
        
    actualizarCarrito()
    eliminardelCarrito(agregarCompra)
}

function agregaralCarrito(element)
{
    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML =
    `
        <div><img src="${element.img}"></div>
        <div class="texto">
        <h4>${element.nombre}</h4> <br>
        <p>Precio: $${element.precio}</p> <br>
        <p id = "cantidad${element.id}">Cantidad: ${element.cantidad}</p> <br>
        </div>
        <button class="boton-eliminar" id="btnEliminar${element.id}"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
    `

    carritoContenedor.appendChild(div)
}

function eliminardelCarrito(eliminarCompra)
{
    let btnEliminar = document.getElementById(`btnEliminar${eliminarCompra.id}`)

    btnEliminar.addEventListener('click', () => 
    {
        btnEliminar.parentElement.remove()
        stock.find(el => el.id == eliminarCompra.id).cantidad = 1
        carrito = carrito.filter (el => el.id != eliminarCompra.id)
        actualizarCarrito()
    })
}

function realizarCompra ()
{
    if(carrito.length > 0)
    {
        setTimeout(() => {
            contenedorModal.classList.toggle('modal-power')
        }, 1500);
        carrito.length = 0
        carritoContenedor.innerHTML=""
        actualizarCarrito()
        Toastify({
            text: "✅ Se realizó la compra",
            duration: 2000,
            style:{
                background: "#f5e4bb",
                fontFamily: "Montserrat, sans-serif",
                color: "black"
            }
        }).showToast();
    }
    
    else
    {
        Toastify({
            text: "❌ No tienes nada en el carrito",
            duration: 2000,
            style:{
                background: "#f5e4bb",
                fontFamily: "Montserrat, sans-serif",
                color: "black"
            }
        }).showToast();
    }
}

function actualizarCarrito ()
{
    numCarrito.innerText = carrito.reduce((acc, el) => acc + el.cantidad, 0)
    precio.innerText = carrito.reduce((acc,el)=> acc + (el.precio * el.cantidad),0)
    guardarProductosLocalStorage()
}