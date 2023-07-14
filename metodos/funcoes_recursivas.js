function dividir(num){
    console.log(num)
    if(num % 2 === 0){
        dividir(num / 2) // chamou ela mesma
    }else{
        return num // tomar cuidado pra não ficar se chamando eternamente 
    }
}

// dividir(parseFloat(prompt("digite um numero")))

function fatorial(x){
    if(x === 0){
        return 1
    }else if(x === 1){
        return 1
    }else{
        //console.log(x + " * !" + (x - 1))
        return x * fatorial(x - 1) // ex: !5 = 5 * 4 * 3 * 2 * 1 === 5 * !4
    }
}

console.log(fatorial(parseFloat(prompt("digite um numero pra calcular o fatorial"))))