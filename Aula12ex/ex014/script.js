function carregar(){
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas`
        if(hora >= 0 && hora < 12){
            // Bom dia!
            //Troquei o bom dia por boa tarde, pois a imagem se asemelhava mais com o dia então fiz a inversão.
            img.src = 'BoaTarde.png'
            document.body.style.background = '#ABECFF'

        }
        else if (hora >= 12 && hora < 18){
            // Boa tarde!
            img.src = 'BomDia.png'
            document.body.style.background = '#EDAD66'
        }
        else {
            //Boa noite!
            img.src = 'BoaNoite.png'
            document.body.style.background = '#00265C'
        }
}