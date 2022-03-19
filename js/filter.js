const filtro = document.getElementById('producto')
const enter = document.getElementById('buscador')

// FILTER DE BOTONES UL LI

filtro.addEventListener("click", e =>
{
    if(e.target && e.target.nodeName == "LI") 
    {
        if (e.target.id == 'todos')
            mostrarProductos(stock)

        else
            mostrarProductos(stock.filter(el => el.tipo == e.target.id))
    }
});

// FILTER DE INPUT

enter.addEventListener("keypress", e => {
    let texto = (document.getElementById('buscador').value).toLowerCase()

    if (e.key == 'Enter')
    {
        if (texto == 'monitor' || texto == 'monitores')
            mostrarProductos(stock.filter(el => el.tipo == "monitor"))
        
        else if (texto == 'cpu' || texto == 'procesador' || texto == 'procesadores')
            mostrarProductos(stock.filter(el => el.tipo == "cpu"))

        else if (texto == 'memoria' || texto == 'ram')
            mostrarProductos(stock.filter(el => el.tipo == "ram"))

        else if (texto == 'hhd' || texto =='ssd' || texto == 'disco' || texto == 'discos')
            mostrarProductos(stock.filter(el => el.tipo == "disco"))

        else if (texto == 'fuente' || texto =='fuentes')
            mostrarProductos(stock.filter(el => el.tipo == "fuente"))

        else if (texto == 'mouse' || texto == 'raton')
            mostrarProductos(stock.filter(el => el.tipo == "mouse"))

        else if (texto == 'teclado' || texto == 'teclados')
            mostrarProductos(stock.filter(el => el.tipo == "teclado"))

        else
            mostrarProductos(stock)
    }
})