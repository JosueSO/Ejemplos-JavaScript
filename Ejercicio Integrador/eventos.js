function agregaEvento() {
    for (var i = 0; i < botones.length; i++) {
        botones[i].onclick = checkButton
    }
}

function checkButton () {
    if(this.id === 'eq') {
        try {
            texto = eval(texto) + " "
        }
        catch (Exception){
            texto = "ERROR"
        }
        changeText(texto)
    }
    else if (this.id === 'clear') {
        texto = ""
        changeText(texto);
    }
    else if (this.id === 'sharp') {
        apila()
        convierte()
    } 
    else {
        texto += this.id + " "
        changeText(texto);
    }
}

function changeText (cadena) {
    var consola = document.getElementById('console')
    consola.textContent = cadena
}

function apila () {
    var aux = texto.split(' ')
    for (var i = 0; i < aux.length; i++) {
        posFijo.push(aux[i])
    }
    posFijo.pop()
}

function convierte() {
    var inFijo = new Array()
    var temp
    var correct = true
    var n1, n2
    posFijo.reverse();
    while (posFijo.length != 0 && correct === true) {
        temp = posFijo.pop()
        if (isOperando(temp) === true) {
            if (inFijo.length < 2)
                correct = false
            else {
                    n2 = inFijo.pop()
                    n1 = inFijo.pop()
                    inFijo.push(eval(n1 + temp + n2))
            }
        }
        else {
            inFijo.push(temp)
        }
    }

    if(correct === false) {
        texto = "ERROR"
    }
    else {
        texto = inFijo.pop()  + " "
    }
    changeText(texto)
}

function isOperando(cadena) {
    if(cadena === "+" ||
    cadena === "-" ||
    cadena === "*" ||
    cadena === "/" ||
    cadena === "(" ||
    cadena === ")" )
        return true;
    else
        return false;
}

var texto = "";
var posFijo = new Array();

var botones = document.getElementsByTagName('button');
agregaEvento();

