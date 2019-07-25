function validar(){
    let numero = document.getElementById('numero')
    let tab = document.getElementById('tab')
    if (numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
        let num = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
  
}