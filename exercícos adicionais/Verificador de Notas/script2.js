function Calcular(){
    var n1 = Number(document.getElementById('nota1').value)
    var n2 = Number(document.getElementById('nota2').value)
    var res = Number(document.getElementById('res').value)

    var med = (c1 + c2)/ 2;

    if (nota1.value == '' && nota2.value == ''){
        window.alert('ERRO')

    }
    else if (med.value > 7) {
        res.innerHTML = 'APROVADO'
    }
    else{
        res.innerHTML = 'REPROVADO'
    }
}