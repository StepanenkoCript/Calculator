var operador = "";


function inserirNumero(x) {
    document.getElementById("resultado").innerHTML += x;
}

function deletarTudo() {
    document.getElementById("resultado").innerHTML = "";
}

function multiplicar() {
    numeroSalvo = resultado.innerHTML
    document.getElementById("resultado").innerHTML = "";
    operador = "*";
}

function dividir() {
    numeroSalvo = resultado.innerHTML
    document.getElementById("resultado").innerHTML = "";
    operador = "/"
}

function subtrair() {
    numeroSalvo = resultado.innerHTML
    document.getElementById("resultado").innerHTML = "";
    operador = "-"
}

function somar() {
    numeroSalvo = resultado.innerHTML
    document.getElementById("resultado").innerHTML = "";
    operador = "+"
}

function calcular() {
    if (operador == "+" ) {
        var numeroVisor = document.getElementById("resultado").innerHTML;
        var juntarNumeros = Number(numeroSalvo) + Number(numeroVisor);
        document.getElementById("resultado").innerHTML = juntarNumeros;
    }

    if (operador == "-" ) {
        var numeroVisor = document.getElementById("resultado").innerHTML;
        var juntarNumeros = Number(numeroSalvo) - Number(numeroVisor);
        document.getElementById("resultado").innerHTML = juntarNumeros;
    }

    if (operador == "/" ) {
        var numeroVisor = document.getElementById("resultado").innerHTML;
        var juntarNumeros = Number(numeroSalvo) / Number(numeroVisor);
        document.getElementById("resultado").innerHTML = juntarNumeros;
    }

    if (operador == "*" ) {
        var numeroVisor = document.getElementById("resultado").innerHTML;
        var juntarNumeros = Number(numeroSalvo) * Number(numeroVisor);
        document.getElementById("resultado").innerHTML = juntarNumeros;
    }
}














