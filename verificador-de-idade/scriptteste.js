function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    let img = document.getElementById('imagem')
    if(fano.value.length ==0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        let fadsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ` `
        if(fadsex[0].checked){
            genero = `Homem`
            if(idade >= 0 && idade < 10){
                //criança
                img.src = `menino.jpg`
            }else if (idade < 20){
                //adolescente
                img.src = `jovemH.jpg`
            }else if (idade < 45){
                //adulto
                img.src = `homem.jpg`
            }else{
                //velho
                img.src = `velho.jpg`
            }
            
        }else if(fadsex[1].checked){
            genero = `Mulher`
            if(idade >= 0 && idade < 10){
                //criança
                img.src = `menina.jpg`
            }else if (idade < 20){
                //adolescente
                img.src = `jovemM.jpg`
            }else if (idade < 45){
                //adulto
                img.src = `mulher.jpg`
            }else{
                //velho
                img.src = `velha.jpg`
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}