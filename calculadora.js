var monitor = document.getElementById('monitor')
var res = document.getElementById('res')
var n0 = document.getElementById('n0')
var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var n3 = document.getElementById('n3')
var n4 = document.getElementById('n4')
var n5 = document.getElementById('n5')
var n6 = document.getElementById('n6')
var n7 = document.getElementById('n7')
var n8 = document.getElementById('n8')
var n9 = document.getElementById('n9')
var nn = document.getElementById('nn')
var i = -1
var mostrar = ''
var box1 = ''
var box2 = ''
var box3 = []
var simb1 = ''
var simb2 = []
var resultado = ''

//inserir um numero
function digt1() {
    if (box1 == 0 || box1 != 0) {
        box1 = '1'
        exibirNaTela()
    }
}
function digt2() {
    if (box1 == 0 || box1 != 0) {
        box1 = '2'
        exibirNaTela()
    }
}
function digt3() {
    if (box1 == 0 || box1 != 0) {
        box1 = '3'
        exibirNaTela()
    }
}
function digt4() {
    if (box1 == 0 || box1 != 0) {
        box1 = '4'
        exibirNaTela()
    }
}
function digt5() {
    if (box1 == 0 || box1 != 0) {
        box1 = '5'
        exibirNaTela()
    }
}
function digt6() {
    if (box1 == 0 || box1 != 0) {
        box1 = '6'
        exibirNaTela()
    }
}
function digt7() {
    if (box1 == 0 || box1 != 0) {
        box1 = '7'
        exibirNaTela()
    }
}
function digt8() {
    if (box1 == 0 || box1 != 0) {
        box1 = '8'
        exibirNaTela()
    }
}
function digt9() {
    if (box1 == 0 || box1 != 0) {
        box1 = '9'
        exibirNaTela()
    }
}

//exibir o valor inserido e guardalo com number
function exibirNaTela() {
    monitor.innerHTML += box1
    box2 += Number(box1)
    res.innerHTML = resolver()
}

//inserir um operador
function divide() {
    if (box2 != '') {
        simb1 = 0
        contar()
    }
}
function times() {
    if (box2 != '') {
        simb1 = 1
        contar()
    }
}
function minus() {
    if (box2 != '') {
        simb1 = 2
        contar()
    }
}
function plus() {
    if (box2 != '') {
        simb1 = 3
        contar()
    }
}


function contar() {
    box3.push(box2)
    if (simb1 === 0) {
        monitor.innerHTML += "&divide;"
    } else if (simb1 == 1) {
        monitor.innerHTML += "&times;"
    } else if (simb1 == 2) {
        monitor.innerHTML += "&minus;"
    } else if (simb1 == 3) {
        monitor.innerHTML += "&plus;"
    }
    if (resultado === '') {
        resultado = box2
    }
    simb2.push(simb1)
    box1 = ''
    box2 = ''
    i++
}

//executar uma operação

function resolver() {
    if (simb2[i] === 0) {
        resultado = resultado / box2
    } else if (simb2[i] == 1) {
        resultado = resultado * box2
    } else if (simb2[i] == 2) {
        resultado = resultado - box2
    } else if (simb2[i] == 3) {
        resultado = resultado + box2
    }
    return resultado
}
