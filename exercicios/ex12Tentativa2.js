const imoveis = []
let opcao = ""

do {
    opcao = prompt(" --- CORRETORA DE IMÓVEIS --- \n" + 
    "Total de imoveis: " + imoveis.length +
    "\n\n Escolha uma opçao: \n 1. Salvar imóvel novo\n 2. Ver a quantidade de imóveis cadastrados.\n 3. SAIR")

    switch(opcao){
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Qual o nome do proprietário?")
            imovel.quartos = prompt("Quantos quartos tem o imóvel?")
            imovel.banheiros = prompt("Quantos banheiros tem o imóvel?")
            imovel.garagem = prompt("O imóvel tem garagem?")

            const confirmacao = confirm("Salvar este imóvel?\n" +
            "Proprietário: " + imovel.proprietario +
            "\nQuartos: " + imovel.quartos +
            "\nBanheiros: " + imovel.banheiros +
            "\nTem garagem: " + imovel.garagem)

            if(confirmacao){
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            }else{
                alert("voltando pro menu...")
            }
            break
        case "2":
            for(let i = 0; i < imoveis.length; i++){
                alert("Imóvel " + (i + 1) + ": \n" +
                "Proprietário: " + imoveis[i].proprietario +
                "\nQuartos: " + imoveis[i].quartos + 
                "\nBanheiros: " + imoveis[i].banheiros +
                "\nGaragem? " + imoveis[i].garagem)
            }
            break
        case "3":
            break
        default:
            alert("coloque uma opção valida")
    }
    
} while (opcao !== "3");

alert("saindo...")