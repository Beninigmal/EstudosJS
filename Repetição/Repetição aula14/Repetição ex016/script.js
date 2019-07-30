function contar(){
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    let res = document.querySelector('div#res')
    
    if(inicio == '' || fim == '' || passo == ''){
        alert('Preencha os campos obrigatórios!')
    } else if(passo == 0){
            alert('O número zero é impossível de se trabalhar, considerando o número 1!')
            passo.value++
          }  else {
            while(inicio <= fim){
                res.innerHTML += inicio
                inicio += passo 
            }

               
          }

}