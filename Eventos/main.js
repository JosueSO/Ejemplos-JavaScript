function saludar () {
    alert ("Hola")
}

function saludar2 () {
    document.write("Hola documento")
}

var botonSaluda = document.getElementById('btn-saludo')
botonSaluda.onclick = saludar

var botonSaluda2 = document.getElementById('btn-saludo-v2')
botonSaluda2.addEventListener('click',saludar)
botonSaluda2.addEventListener('click',saludar2)