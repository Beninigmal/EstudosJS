function contar() {
  // let inicio = Number(document.getElementById('inicio').value)
  // let fim = Number(document.getElementById('fim').value)
  // let passo = Number(document.getElementById('passo').value)
  // let res = document.querySelector('div#res')
  let inicio = document.getElementById('inicio').value
  let fim = document.getElementById('fim').value
  let passo = document.getElementById('passo').value
  let res = document.querySelector('div#res')

  res.innerHTML = inicio

  // if (inicio == 0 || fim == 0 || passo == 0) {
  //   if (passo == 0) {
  //     alert('O número zero é impossível de se trabalhar, considerando o número 1!')
  //     passo = 1
  //     execCrescente
  //     execDecrescente
  //   } else {
  //     alert('Preencha os campos obrigatórios!')
  //   }
  // }
  // if (inicio == fim) {
  //   alert('Campo INICIO não pode ser igual ao campo FIM, por favor insira um número válido!')
  // }else{
  //   execCrescente
  //   execDecrescente
  // }





  // function execCrescente() {
   
  //   if (inicio < fim) {
  //     res.innerHTML = 'Contando:'
  //     for (let index = inicio; index < fim; index += passo) {
  //       res.innerHTML += `${index} \u{27a1}`
  //       //É importante na terceira etapa do for que o index seja += senão pode ser trave ao executar o código.     
  //     }
  //     res.innerHTML += ` ${fim} \u{2705}`
  //   }
  // }
  // function execDecrescente() {
    
  //   if (inicio > fim) {
  //     res.innerHTML = 'Contando:'
  //     for (let index = inicio; index > fim; index -= passo) {
  //       res.innerHTML += `${index} \u{27a1}`

  //     }
  //   }
  //   res.innerHTML += ` ${fim} \u{2705}`
  // }




}