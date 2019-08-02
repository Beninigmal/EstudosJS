function contar() {
  let inicio = document.getElementById('inicio')
  let fim = document.getElementById('fim')
  let passo = document.getElementById('passo')
  let res = document.querySelector('div#res')
  res.innerHTML = null

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert('Preencha os campos obrigatórios!')
  } else if (inicio.value == fim.value) {
    alert('O campo INICIO não pode ser igual ao campo FIM!')
  } else if (Number(passo.value) <= 0) {
    alert('Não é possível efetuar a contagem com o valor 0, será considerado o valor 1')
    p = 1
    ini = Number(inicio.value)
    f = Number(fim.value)
    p = Number(passo.value)
    res.innerHTML += 'Contando:'
   
    
    if (ini < f) {
      for (let i = ini; i <= f; i += p) {
        res.innerHTML += ` ${i} \u{27a1}`
      }
      res.innerHTML += ` \u{2705}`
    } else {
      for (let i = ini; i >= f; i -= p) {
        res.innerHTML += ` ${i} \u{27a1}`
      }
      res.innerHTML += ` \u{2705}`
    }


  }












}