alert("Olá recruta! Vamos recolher suas informações.")
let nome = prompt("Digite seu primeiro!")
let sobrenome = prompt("Agora, seu sobrenome:")
let campoDeEstudo = prompt("DIgite também seu campo de estudo")
let anoDeNascimento = prompt("E seu ano de nascimento:")

parseFloat(anoDeNascimento)
let idade = 2023 - anoDeNascimento

alert("Seu nome é " + nome + " " + sobrenome + ", e tem/vai fazer " + idade + " anos. E seu campo de estudo é: " + campoDeEstudo)
let confirmacao = confirm("Essas informações estão corretas?")

if (confirmacao == true) {
    alert("Ok! Obrigado.")

    let continuar = confirm("Gostaria de testar outro de nossos programas?")

    if (continuar == true) {
        alert("certo :) vamos lá")

        let numberOne = prompt("Digite um numero:")
        let numberTwo = prompt("Digite o segundo numero:")

        let uno = parseFloat(numberOne)
        let dos = parseFloat(numberTwo)

        let soma = uno + dos
        let sub = uno - dos
        let vezes = uno * dos
        let divisao = uno / dos

        alert(uno + "+" + dos + "=" + soma)
        alert(uno + "-" + dos + "=" + sub)
        alert(uno + "*" + dos + "=" + vezes)
        alert(uno + "/" + dos + "=" + divisao)
    } else {
        alert("ok :(")
    }
} else {
    alert("favor clique em F5 e faça tudo novamente")
}