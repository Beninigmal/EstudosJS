function validar() {
    let numero = document.getElementById('numero')
    let tab = document.getElementById('tab')
    if (numero.value.length < 1 || numero.value.length > 1) {
        alert('Digite um número de 1 a 9!')
    } else if (numero.value == 0) {
        alert('Todos os números multiplicados por 0 o resultado será 0, insira um valor de 1 a 9!')
    } else {
        let num = Number(numero.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            1
        }
    }
}