let option, nomeVaga, descricaoVaga, dataLimite, tudoCerto, nomeCanditado, indiceDaInscricao, confirmaInscricao,
    qualVaga, continueInscrevendo, excluirEsse
const vagas = []

function listarVagasDisponiveis(vagas) {
    alert("Resumo de todas as vagas disponíveis:")
    for(let i = 0; i < vagas.length; i++){
        alert("Indice: " + i +
        "\nVaga: " + vagas[i].vaga +
        "\nQuantidade de inscritos: " + Object.keys(vagas[i].canditados).length)
    }
}

function criarNovaVaga() {
    do {
        nomeVaga = prompt("Digite o nome da vaga")
        descricaoVaga = prompt("Dê uma descrição sobre a vaga")
        dataLimite = prompt("Qual a data limite da vaga?")

        tudoCerto = confirm("As informações estão corretas?\n" +
            "Nome da vaga: " + nomeVaga +
            "\nDescrição da vaga: " + descricaoVaga +
            "\nData limite da vaga: " + dataLimite)

        if (tudoCerto === true) {
            alert("Ok! Salvando as informações...")
        } else {
            alert("Vamos de novo então..")
        }
    } while (tudoCerto === false);

    vagas.push({
        vaga: nomeVaga,
        descricao: descricaoVaga,
        data: dataLimite,
        canditados: []
    })
}

function vizualizarUmaVaga(vagas) {
    qualVaga = parseFloat(prompt("Qual o índice da vaga que você deseja vizualizar?"))
    alert("Índice: " + qualVaga +
        "\nVaga: " + vagas[qualVaga].vaga +
        "\nDescricao: " + vagas[qualVaga].descricao +
        "\nData limite: " + vagas[qualVaga].data +
        "\nNumero de canditados: " + Object.keys(vagas[qualVaga].canditados).length +
        "\nCanditados: " + vagas[qualVaga].canditados)
}

function inscreverCanditado(vagas) {
    do {
        nomeCanditado = prompt("Informe o nome do canditado:")
        indiceDaInscricao = parseFloat(prompt("Qual o índice da vaga?"))
        //vagas[indiceDaInscricao].canditados = []

        confirmaInscricao = confirm("Nome da vaga: " + vagas[indiceDaInscricao].vaga +
            "\nDescrição: " + vagas[indiceDaInscricao].descricao +
            "\nData limite: " + vagas[indiceDaInscricao].data +
            "\n\nEssa é a vaga escolhida?")

        if (confirmaInscricao === true) {
            alert("OK! Inscrevendo... ")
            vagas[indiceDaInscricao].canditados.push(nomeCanditado)
        } else {
            alert("Vamos tentar de novo, então!")
        }
    } while (confirmaInscricao === false);
}

function excluirVaga(vagas) {
    excluirEsse = parseFloat(prompt("Qual o índice da vaga que você deseja excluir?"))
    vagas.splice(excluirEsse, 1)
    console.log(vagas)
    alert("Vaga excluida com sucesso!")
}

do {
    option = prompt("Bem vindo! Aqui você pode fazer de tudo em relação as nossas vagas de emprego.\n" +
        "\nEscolha uma das opções:\n" +
        "1. Listar vagas disponíveis \n" +
        "2. Criar uma nova vaga \n" +
        "3. Vizualizar uma vaga \n" +
        "4. Inscrever um canditado em uma vaga \n" +
        "5. Excluir uma vaga \n" +
        "6. SAIR")

    switch (option) {
        case "1":
            listarVagasDisponiveis(vagas)
            break
        case "2":
            criarNovaVaga()
            console.log(vagas)
            break
        case "3":
            vizualizarUmaVaga(vagas)
            break
        case "4":
            inscreverCanditado(vagas)
            console.log(vagas)
            break
        case "5":
            excluirVaga(vagas)
            break
        case "6":
            alert("saindo...")
            break;
        default:
            alert("Digite uma opção válida.")
            break;
    }
} while (option !== "6");