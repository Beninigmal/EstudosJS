//Declaração das variaveis que faram integração com o HTML
let num = document.querySelector('input#numero')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//Aqui será iniciado as funções

//função que verificará se o número digitado será entre 1 e 100
function veNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//Função que verificará se o valor não está na lista.
function naLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

//Função do evento onClick disparado no HTML
function adicionar() {

    if (veNumero(num.value) && !naLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('Por favor insira um número válido!')
    }
    num.focus() // Esse código é para que o cursor ao adicionar um novo valor volte para o mesmo campo.
    num.value = '' // Já esse é para assim que seja adicionado um número o campo volte a ficar em branco.
}

/*O objetivo agora é:

Imprimir em tela: 
1- Quantos números foram digitados.
2- Quais os números foram digitados.
3- Qual o maior e o menor número.
4- A média dos números digitados.
*/

function imprimir() {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior) {
            maior = valores[pos]
        }
        if (valores[pos] < menor) {
            menor = valores[pos]
        }
        media = soma / tot
    }
    res.innerHTML += `<p>A quantidade total de números inseridos foram ${tot}!</p>`
    res.innerHTML += `<p>Os números digitados foram: ${valores}</p>`
    res.innerHTML += `<p>O maior número digitado foi o ${maior} e o menor número foi ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${media}</p>`
}