function verificar(){
    var txt1 = document.getElementById('txt')
    var res = document.getElementById('res')
    if(txt.value == ''){
        res.innerHTML = '<strong>[ERRO]LETRA INVÁLIDA</strong> '
    }
    else if (txt.value.toLowerCase() == 'a' || txt.value.toLowerCase() == 'e' || txt.value.toLowerCase() == 'i' || txt.value.toLowerCase() == 'o'|| txt.value.toLowerCase() == 'u'|| txt.value.toLowerCase() == 'y'|| txt.value.toLowerCase() == 'w'){
            res.innerHTML = `<p>A letra ${txt.value.toLowerCase()} é vogal</p> `
        
    }
    else {
        res.innerHTML = `A letra ${txt.value.toLowerCase()} é consoante` 
     }
}