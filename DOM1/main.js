//var cajas = document.getElementsByTagName('div')
//var cajas = document.getElementsByClassName('caja')
var caja = document.getElementById('primera');

caja.textContent = 'Primera caja';
//cajas[0].textContent = 'Hola mundo'
//cajas[1].innerHTML = '<b> Hola JavaScript </b>'

//No se recomienda agregar metodos con el metodo write
//document.write('<div class="caja"> Nuevo elemento </div>')

//-------------------------------------------------------------
//5 pasos para agregar elemtnos en el DOM
//Paso 1.- Crear el nuevo elemento (createElement())
var elementoNuevo = document.createElement("div")
//Paso 2.- Crear el contenido (createTextNode())
var nodoContenido = document.createTextNode("Nuevo elemento")
//Paso 3.- Añadir el contenid al elemento (appendChild())
elementoNuevo.appendChild(nodoContenido)
//Paso 4.- Agregar atributos al elemento (setAttribute())
elementoNuevo.setAttribute('class','caja colorcoral')
//Paso 5.- Agregar el elemento al documento (appendChild())
//Agrega el elemento al final
var contenedor = document.getElementById('contenedor')
//contenedor.appendChild(elementoNuevo)
var segunda = document.getElementById('segunda')
contenedor.insertBefore(elementoNuevo,segunda);
//-------------------------------------------------------------

//Eliminar la caja con el id = 'tercera'
var tercera = document.getElementById('tercera')
contenedor.removeChild(tercera)