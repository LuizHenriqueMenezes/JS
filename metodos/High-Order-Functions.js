function calcular(a, b, operacao){
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y){
    return x + y
}

console.log(calcular(3, 5, somar)) // sem o () pq estamos chamando a própria função, não o resultado dela

console.log(calcular(8, 4, function(a, b){ //funções anônimas
    return a - b
}))

///////////////// exemplo de uso no dia a dia ////////////////////////

function exibirElemento(elemento, indice, array){
    console.log({
        elemento, 
        indice, 
        array
    })
}

const lista = ["maça", "banana", "laranja", "melancia"]

// ao inves de fazer isso:
for(let i = 0; i < lista.length; i++){
    exibirElemento(lista[i], i, lista)
}

//basta fazer isso:
lista.forEach(exibirElemento) //pra cada idem da lista a gente chama o exibirElemento
//pede como parâmetro uma "callbackfn" (função parâmetro de uma High-Order Functions,
// seria como uma "chamada de volta"
