function validar() {
    let numero = document.getElementById('numero')
    let tab = document.getElementById('tab')
    if (numero.value.length < 1 || numero.value.length > 2) {
        alert('Por favor insira um número de 1 a 10')

    }else if (numero.value == 0) {
        alert('Todo número multiplicado por 0 o resultado é 0! Por favor insira um número de 1 a 10')
    } else if (numero.value.length == 2 && numero.value >= 11) {
        alert('Insira apenas números de 1 a 10!')
    }
    else{
        let n = numero.value
        tab.innerHTML = ''
        for (let c = 1; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            //Nesse for foi utilizado o createElement('option') para criar as tabelas de forma dinâmica
            
        }
 
    }
}