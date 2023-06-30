function contar() {
    let n1 = Number(document.getElementById('num1').value)
    let tab = document.getElementById('tabu')

    let n2 = 1

    if (n1 == '') {
        alert('erro')
    } else {
        tab.innerHTML = ''

        while (n2 <= 10) {
            let p = document.createElement("p")
            p.innerHTML = `${n1} x ${n2} = ${n1 * n2}`
            tab.appendChild(p)
            n2++
        }
    }
}






