function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'Foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagem/foto-bebe-m.png')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagem/foto-jovem-m.png')
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagem/foto-adulto-m.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagem/foto-idoso-m.png')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagem/foto-bebe-f.png')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagem/foto-jovem-f.png')
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagem/foto-adulto-f.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagem/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}