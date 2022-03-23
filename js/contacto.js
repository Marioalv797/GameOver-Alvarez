let paises = document.getElementById('paises')
const form = document.getElementsByTagName('form')
let enviar = document.getElementById('enviar')
let nombre = document.getElementById('nombre')
let correo = document.getElementById('correo')
let texto = document.getElementById('texto')

leerLocalStorage()

// AGREGANDO PAISES AL SELECT
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json ())
.then (function (data){
    Object.values (data).map(el => {
        let opt = document.createElement ('option');
        opt.innerHTML = el.name.common
        paises.appendChild(opt);
    })
})

// ASINCRONIZAR EL FUNCIONAMIENTO DEL FORM
enviar.addEventListener('click', el => {
    if (nombre.value != "" && correo.value != "" && texto.value != "")
    {
        form.onsubmit = setTimeout(() => {
            location.reload(true)
        }, 1500);
        
        el.preventDefault();
        Toastify({
            text: "✅ Se envió el mensaje.",
            duration: 2000,
            style:{
                background: "#f5e4bb",
                fontFamily: "Montserrat, sans-serif",
                color: "black"
            }
        }).showToast();
    }
})
