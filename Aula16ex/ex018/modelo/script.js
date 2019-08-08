let num = document.querySelector('input#numero')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ' '
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ' '
    num.focus()
}

function imprimir() {
    if (valores.length == 0) {
        alert('Não é possível finalizar sem ter adicionado valóres previamente!')
    } else {
        let tot = valores
        let maior = valores[0]
        let menor = valores[0]


        res.innerHTML += `<p>A quantidade de números inseridos foi ${tot.length}</p>`
        res.innerHTML += `<p>Os números digitados são ${tot}</p>`


        //contar quantas posições tem o campo
        //Dizer qual é o maior e menor número
        //Efetuar a soma de todos os números
        //efetuar a média desses números
    }
}