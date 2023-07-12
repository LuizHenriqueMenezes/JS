function calcularMedia(a, b){
    const media = (a + b) / 2
    return media // <-- sem isso, não volta nada   
}

alert("Média de 10 e 5: " + calcularMedia(10, 5))

////////////////////////////////////////////////////////

function areaRetangular(base, altura){
    return base * altura
}

function areaQuadrada(lado){
    return areaRetangular(lado, lado)
}

alert("Area retangular de 3 e 5: " + areaRetangular(3, 5))

alert("Area quadrada de 9: " + areaQuadrada(9))

// a function só da return uma vez, não pd ter código dps do return

function opcoesReturn(x){
    let idade
    if(x >= 18){
        idade = alert("maior de idade")
        return idade
    }else{
        idade = alert("menor de idade")
        return idade
    }
}

opcoesReturn(9)
opcoesReturn(90)