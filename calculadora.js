let monitor = document.getElementById('monitor')
let res = document.getElementById('res')
let n0 = document.getElementById('n0')
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let n3 = document.getElementById('n3')
let n4 = document.getElementById('n4')
let n5 = document.getElementById('n5')
let n6 = document.getElementById('n6')
let n7 = document.getElementById('n7')
let n8 = document.getElementById('n8')
let n9 = document.getElementById('n9')
let nn = document.getElementById('nn')
let box = ''
let box1 = 0
let box2 = 0
let box3 = 0
let operador = 0
let sinal = 0
let causa = 0

function digt1() {
    if (box == 0 || box != 0) {
        monitor.innerHTML += '1'
        box += '1'
        box1 = Number(box)
        if (operador == 0) {
            box3 = box2 + box1
            res.innerHTML = box3
            sinal = 0
        } else if (operador == 1) {
            box3 = box2 + box1
            res.innerHTML = box3
            sinal = 0
        } else if (operador == 2) {
            box3 = box2 * box1
            res.innerHTML = box3
            sinal = 0
        } else if (operador == 3) {
            box3 = box2 / box1
            res.innerHTML = box3
            sinal = 0
        } else if (operador == 4) {
            if (causa == 0) {
                if (sinal == 0) {
                    box3 = Math.sqrt(box1)
                    res.innerHTML = box3
                } else if (sinal == 1) {
                    box3 = -Math.sqrt(box1)
                    res.innerHTML = box3
                } else if (sinal == 2) {
                    box3 = Math.sqrt(box1)
                    res.innerHTML = box3
                }
            } else if (causa == 1) {
                if (box2 > 0) {
                    box3 = box2 * Math.sqrt(box1)
                    res.innerHTML = box3
                } else if (box2 < 0) {
                    box3 = box2 * Math.sqrt(box1)
                    res.innerHTML = box3
                }
            } else if (causa == 2) {
                if (box2 > 0) {
                    box3 = box2 / Math.sqrt(box1)
                    res.innerHTML = box3
                } else if (box2 < 0) {
                    box3 = box2 / Math.sqrt(box1)
                    res.innerHTML = box3
                }
            } else if (causa == 3) {
                box3 = box2 - Math.sqrt(box1)
                res.innerHTML = box3
            } else if (causa == 4) {
                box3 = box2 + Math.sqrt(box1)
                res.innerHTML = box3
            }
        }
    }
}
function minus() {
    if (operador == 0 && sinal == 0) {
        if (box1 == 0) {
            box2 = box2 + box1
            box = '-'
            monitor.innerHTML += '-'
            sinal = 1
        } else if (box1 != 0) {
            box2 = box2 + box1
            box = '-'
            monitor.innerHTML += '-'
            sinal = 1
            operador = 1
        }
    } else if (operador == 1) {
        if (Number(box) >= 0 || Number(box) < 0) {
            box2 = box2 + box1
            box = '-'
            monitor.innerHTML += '-'
            operador = 1
        }
    } else if (operador == 2 && sinal == 0) {
        if (box == '') {
            monitor.innerHTML += '-'
            box = '-'
            sinal = 1
        } else if (box1 >= 0 || box1 < 0)  {
            monitor.innerHTML += '-'
            box2 = box2 * box1
            box = '-'
            operador = 1
            sinal = 1
        }
    } else if (operador == 3 && sinal == 0) {
        if (box == '') {
            monitor.innerHTML += '-'
            box = '-'
            sinal = 1
        } else if (box1 >= 0 || box1 < 0)  {
            monitor.innerHTML += '-'
            box2 = box2 / box1
            box = '-'
            operador = 1
            sinal = 1
        }
    } else if (operador == 4 && box != 0) {
        monitor.innerHTML += '-'
        box2 = box3
        box = '-'
        operador = 1
    }
}
function plus() {
    if (operador == 0 && sinal == 0) {
        if (box1 == 0) {
            box2 = box2 + box1
            box = ''
            monitor.innerHTML += '+'
            sinal = 2
        } else if (box1 != 0) {
            box2 = box2 + box1
            box = ''
            monitor.innerHTML += '+'
            sinal = 1
            operador = 1
        }
    } else if (operador == 1) {
        if (Number(box) >= 0 || Number(box) < 0) {
            box2 = box2 + box1
            box = '+'
            monitor.innerHTML += '+'
            operador = 1
        }
    } else if (operador == 2 && sinal == 0) {
        if (box == '') {
            monitor.innerHTML += '+'
            box = ''
            sinal = 2
        } else if (box1 >= 0 || box1 < 0)  {
            monitor.innerHTML += '+'
            box2 = box2 * box1
            box = ''
            operador = 1
            sinal = 2
        }
    } else if (operador == 3 && sinal == 0) {
        if (box == '') {
            monitor.innerHTML += '+'
            box = ''
            sinal = 2
        } else if (box1 >= 0 || box1 < 0)  {
            monitor.innerHTML += '+'
            box2 = box2 / box1
            box = ''
            operador = 1
        }
    } else if (operador == 4 && box != 0) {
        monitor.innerHTML += '+'
        box2 = box3
        box = ''
        operador = 1
    }
}
function times() {
    sinal = 0
    if (operador == 0 && box != 0) {
        monitor.innerHTML += '&times;'
        box2 = box1
        box = ''
        operador = 2
    } else if (operador == 1) {
        monitor.innerHTML += '&times;'
        box2 = box2 + box1
        box = ''
        operador = 2
    } else if (operador == 2 && box != 0) {
        monitor.innerHTML += '&times;'
        box2 = box2 * box1
        box = ''
        operador = 2
    } else if (operador == 3) {
        monitor.innerHTML += '&times;'
        box2 = box2 / box1
        box = ''
        operador = 2
    } else if (operador == 4) {
        if (box != 0) {
            monitor.innerHTML += '&times;'
            box2 = box3
            box = ''
            operador = 2
        }
    }
}
function divide() {
    sinal = 0
    if (operador == 0 && box != 0) {
        monitor.innerHTML += '&divide;'
        box2 = box1
        box = ''
        operador = 3
    } else if (operador == 1) {
        monitor.innerHTML += '&divide;'
        box2 = box2 + box1
        box = ''
        operador = 3
    } else if (operador == 2) {
        monitor.innerHTML += '&divide;'
        box2 = box2 * box1
        box = ''
        operador = 3
    } else if (operador == 3 && box != 0) {
        monitor.innerHTML += '&divide;'
        box2 = box2 / box1
        box = ''
        operador = 3
    } else if (operador == 4) {
        if (box != 0) {
            monitor.innerHTML += '&divide;'
            box2 = box3
            box = ''
            operador = 3
        }
    }
}
function radic() {
    if (operador == 0) {
        if (box == '') {
            monitor.innerHTML += '&radic;'
            operador = 4
            sinal = 0
        } else if (box == '-') {
            monitor.innerHTML += '&radic;'
            box = ''
            operador = 4
            sinal = 1
        }else if (box == '+') {
            monitor.innerHTML += '&radic;'
            operador = 4
            sinal = 2
        } else if (box > 0) {
            monitor.innerHTML += '&radic;'
            box2 = box1
            box = ''
            operador = 4
            causa = 1
        } else if (box < 0) {
            monitor.innerHTML += '&radic;'
            box2 = box1
            box = ''
            operador = 4
            causa = 1
        }
    } else if (operador == 1) {
        if (box == 0) {
            monitor.innerHTML += '&radic;'
            box = 0
            operador = 4
            causa = 3
        } else if (box != 0) {
            monitor.innerHTML += '&radic;'
            box = 0
            operador = 4
            causa = 3
        }
    } else if (operador == 2) {
        if (box == 0) {
            monitor.innerHTML += '&radic;'
            operador = 4
            causa = 1
        } else if (box > 0 || box < 0) {
            monitor.innerHTML += '&radic;'
            operador = 4
            causa = 1
        }
    } else if (operador == 3) {
        if (box == 0) {
            monitor.innerHTML += '&radic;'
            operador = 4
            causa = 2
        } else if (box > 0 || box < 0) {
            monitor.innerHTML += '&radic;'
            operador = 4
            causa = 2
        }
    } else if (operador == 4 && box != 0) {
        monitor.innerHTML += '&radic;'
        box2 = box3
        box = ''
        operador = 4
    }
}