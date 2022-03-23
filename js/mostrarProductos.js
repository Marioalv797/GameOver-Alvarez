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