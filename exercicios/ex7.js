let capitalInicial = prompt("Qual seu capital inicial?")
capitalInicial = parseFloat(capitalInicial)

let opition
let retirar
let save

do {
    opition = prompt("Seu capital inicial é de: " + capitalInicial + " reais. O que gostaria de fazer?\n a) Retirar dinheiro\n b) Guardar dinheiro \n c) SAIR").toUpperCase()

    if(opition === "A"){
        retirar = prompt("Quanto você quer retirar?")
        retirar = parseFloat(retirar)
        capitalInicial -= retirar
    }
    if(opition === "B"){
       save = prompt("Quanto você quer guardar?")
       save = parseFloat(save)
       capitalInicial += save
       
    }
} while (opition !== "C");

alert("saindo..")
