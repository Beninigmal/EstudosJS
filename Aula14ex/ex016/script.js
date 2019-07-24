function contar(){
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
        if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
           alert('Por favor, insira um valor no campo inicio!')
       
        }else {
            res.innerHTML = 'Contando...'
            var i = Number(inicio.value)
            var f = Number(fim.value)
            var p = Number(passo.value)
            if (p <= 0) {
                alert('Passo Invalido! Considerando Passo como 1')
                p = 1
            }
           
            if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
                
        }else if(i > f){
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
           
           
        
         }
         res.innerHTML += `\u{1F3C6}`
}