// let numero = document.getElementById('numero')
// let exibir = document.querySelector('select#varicom')
// let res = document.querySelector('div#res')
// let valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let numero = document.getElementById('numero')
    let exibir = document.querySelector('select#varicom')
    let res = document.querySelector('div#res')
    let valores = []


    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        let item = document.createElement('option')
        item.text = `Inserido o número: ${numero.value}`
        item.value = `${numero.value}`
        exibir.appendChild(item)

    } else {
        alert('Valor invalido ou já encontrado na lista')
    }
}