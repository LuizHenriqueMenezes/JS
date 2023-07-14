function somar(a, b){
    return a + b
}

const operacao = somar // quando não se coloca o parenteses no somar, a operação não está chamando, ela É 
// dai, é possível fazer isso:
alert(operacao(4, 5))

const subtrair = function (a, b){ // as funções anônimas servem pra fazer isso, não precisar dar nome pra função
    return a - b
}

// com isso é possível ser mais dinamico, por exemplo
// se eu quiser que "operacao" mudasse de somar tomasse o lugar da subtrair (unica coisa é que precisaria ser let)

// importante: é preciso declarar primeiro antes de chamar