function calcular(){
    let name = document.getElementById('nome')
    let num1 = document.getElementById('nota1')
    let num2 = document.getElementById('nota2')
    let num3 = document.getElementById('nota3')
    let at = document.getElementById('atitu')
    let res = document.getElementById('res')

    let nome = String(name.value)
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let n3 = Number(num3.value)
    let atitu = Number(at.value)

    
   
    if(name.value.length == 0 ){
        window.alert('[ERRO] preencha todos os campos')
        window.alert("Campo de notas em branco sera considerado 0")
    /*}else if( n1.value.lenght == 0 || n2.value.lenght == 0 || n3.value.lenght ==  0 || atitu.value.lenght == 0){
        window.alert('[ERRO] preencha todos os campos')*/
       // res.innerHTML = 'deu certo'
    }else{
        let m = n1 + n2 + n3 + atitu /3
        if(m >= 14){
            res.innerHTML += `\n Parabéns ${nome} sua média: ${m.toFixed(1)} foi superior a 14 portanto está <strong>apovado!!!</strong>`
        }else{
            res.innerHTML += `\n${nome} sua média: ${m.toFixed(1)} foi abaixo de sete, você está <strong>reprovado!!!</strong>`
        }

    }

    

}
