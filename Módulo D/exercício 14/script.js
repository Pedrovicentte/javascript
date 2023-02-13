    function carregar(){
        var msg = document.getElementById('msg')
        var img = document.getElementById('imagem')
        var data = new Date()
        var hora = data.getHours()
        var sec = data.getSeconds()
        var mil = data.getMilliseconds()
        msg.innerHTML = `Agora são ${hora} horas e ${sec} segundos e ${mil} milisegundos`
        if (hora >= 6 && hora < 12) {
            img.src="imagem/manha.png"
            document.body.style.backgroundColor = '#e2cd9f'
        } else if (hora >= 12 && hora < 18){
            img.src="imagem/tarde.png"
            document.body.style.backgroundColor = '#b9846f'
        } else if(hora >= 18 && hora < 23){
            img.src="imagem/noite.png"
            document.body.style.backgroundColor = '#515154'
        }
        else if(hora >= 0 && hora < 5){
            img.src='imagem/madrugada1.png'
        }
    }