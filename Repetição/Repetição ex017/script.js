function validar() {
    let numero = document.getElementById('numero')
    let res = document.getElementById('tab')
    if(numero.value.length < 1 || numero.value.length > 1){
        alert('Digite um número de 1 a 9!')
    }else if (numero.value == 0) {
        alert('Todos os números multiplicados por 0 o resultado será 0, insira um valor de 1 a 9!')
    } else {
        
    }
   }