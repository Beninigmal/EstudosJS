var inicio = document.querySelector('input#inicio')
var fim = document.querySelector('input#fim')
var passo = document.querySelector('input#passo')
var res = document.querySelector('div#res')
// var contador = inicio.value
function contar(){
    if(inicio.value == '' || fim.value == '' || passo.value == ''){
        alert('Por favor, insira um valor no campo inicio!')
    }
    else{
        while(inicio <= fim){
            res.innerHTML += inicio + passo
        }
    }
}