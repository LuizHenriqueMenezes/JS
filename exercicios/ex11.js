let option, newCard, oldCard
let baralho = ["Chaor", "Maxor", "Intress", "Najarin"]

do {
    option = parseFloat(prompt("--- BARALHO DE CARTAS ---\n 1. Adicionar uma carta\n 2. Puxar uma carta\n 3. Sair"))

    switch(option){
        case 1:
            newCard = baralho.unshift(prompt("Digite o nome da carta:"))
            alert("Seu baralho atual: " + baralho)
            break
        case 2:
            oldCard = baralho.shift()
            alert("Carta removida do topo do baralho: " + oldCard)
            break
        case 3:
            break
        default:
            alert("ESCOLHA UMA OPÇÃO VALIDA, CARAI")
    }
} while (option !== 3);

alert("saindo...")