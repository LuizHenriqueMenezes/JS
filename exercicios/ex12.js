let option, ifGaragem, namePropietario, qtdBanheiro, qtdQuarto, nomeImovel, YesNo, cont = 0
const imoveis = {
    casaUm: { banheiro: 2, quartos: 3, garagem: true, proprietario: "Pedro" },
    casaDois: { banheiro: 1, quartos: 2, garagem: false, proprietario: "Lucas" },
}

do {
    option = parseFloat(prompt(" --- CORRETORA DE IMÓVEIS --- \n\n" + 
    "O que deseja?\n 1. Salvar imóvel novo.\n 2. Ver a quantidade de imóveis cadastrados.\n 3. SAIR"))

    switch (option) {
        case 1:
            do {
                nomeImovel = prompt("Nome do imóvel (não use espaços):")
                namePropietario = prompt("Nome do proprietario:")
                qtdBanheiro = parseFloat(prompt("Quantidade de banheiros"))
                qtdQuarto = parseFloat(prompt("Quantidade de quartos"))
                ifGaragem = confirm("Possui garagem?")

                imoveis[nomeImovel[cont]] = {
                    banheiro: qtdBanheiro, quartos: qtdQuarto,
                    garagem: ifGaragem, proprietario: namePropietario
                }

                YesNo = confirm("Quer adicionar mais um imóvel?")
                if (YesNo === true) {
                    cont += 1
                }
            } while (YesNo === true);

            break
        case 2:
            alert("Casa Um:\n" +
                "banheiros: " + imoveis.casaUm.banheiro +
                "\nquartos: " + imoveis.casaUm.quartos +
                "\ngaragem: " + imoveis.casaUm.garagem +
                "\nProprietário: " + imoveis.casaUm.proprietario)

            alert("Casa Dois:\n" +
                "banheiros: " + imoveis.casaDois.banheiro +
                "\nquartos: " + imoveis.casaDois.quartos +
                "\ngaragem: " + imoveis.casaDois.garagem +
                "\nProprietário: " + imoveis.casaDois.proprietario)

            for (let i = 0; i <= cont; i++) {
                alert(nomeImovel[i] + "\n" +
                    "banheiros: " + imoveis[nomeImovel[i]].banheiro +
                    "\nquartos: " + imoveis[nomeImovel[i]].quartos +
                    "\ngaragem: " + imoveis[nomeImovel[i]].garagem +
                    "\nProprietário: " + imoveis[nomeImovel[i]].proprietario)
            }
            break
        case 3:
            break
        default:
            alert("Coloque uma opção valida")
            break
    }
} while (option !== 3);

alert("saindo...")