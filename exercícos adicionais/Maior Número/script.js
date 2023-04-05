function verificar(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var n3 = parseFloat(document.getElementById('n3').value);
    var res = document.getElementById('res')
    
        if (n1 > n2 || n1 > n3){
            res.innerHTML = `O número ${n1} é o maior `
        }

}