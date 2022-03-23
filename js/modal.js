const carritopowerOn = document.getElementById('boton-carrito');
const carritopowerOff = document.getElementById('carritoCerrar');
const comprar = document.getElementById('comprar');
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

carritopowerOn.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-power')
})
carritopowerOff.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-power')
})
comprar.addEventListener('click', ()=> {
    realizarCompra()
})
modalCarrito.addEventListener('click',(e)=>{
    e.stopPropagation()
})
contenedorModal.addEventListener('click', ()=>{
    carritopowerOff.click()
})