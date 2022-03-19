// IMPRIMIR PRODUCTOS
function mostrarProductos (array)
{
    cardsSpace.innerHTML = ""
    array.forEach(element => 
    {
        let div = document.createElement('div')
        div.innerHTML = 
        `<div class="cards">
            <img src="${element.img}" alt="imagen">
            <div class="cards-text">
                <h1 class="titulo">${element.nombre}</h1>
                <h3 class="precio">$ ${element.precio}</h3>
                <button id="boton${element.id}" class="boton color">Añadir al carrito</button>
            </div>
        </div>`

        cardsSpace.appendChild(div)

        let acumulador = document.getElementById(`boton${element.id}`)
        acumulador.addEventListener('click', () => 
        {
            alCarrito(element.id)
        })
    });
}


// AGREGAR ITEMS AL CARRITO
function alCarrito (id)
{
    let agregarCompra = stock.find (item => item.id == id)

    // VERIFICANDO EL PRODUCTO SI YA EXISTE EN EL CARRITO

    if (carrito.filter(el => el.id == id).length < 1)
    {
        carrito.push(agregarCompra)

        let div = document.createElement('div')

        div.className = 'productoEnCarrito'
        div.innerHTML =
        `
            <div><img src="${agregarCompra.img}"></div>
            <div class="texto">
            <h4>${agregarCompra.nombre}</h4> <br>
            <p>Precio: $${agregarCompra.precio}</p> <br>
            <p id = "cantidad${agregarCompra.id}">Cantidad: ${agregarCompra.cantidad}</p> <br>
            </div>
            <button class="boton-eliminar" id="btnEliminar${agregarCompra.id}"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        `

        carritoContenedor.appendChild(div)
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

function actualizarCarrito ()
{
    numCarrito.innerText = carrito.reduce((acc, el) => acc + el.cantidad, 0)
    precio.innerText = carrito.reduce((acc,el)=> acc + (el.precio * el.cantidad),0)
    guardarProductosLocalStorage()
}