const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

const raca = personagens.map(function (racas) {
    return racas.raca
})

const classes = personagens.map(function (classee) {
    return classee.classe
})

console.log(nomes)
console.log(classes)

const racass = personagens.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.raca]) {
        acumulador[personagem.raca].push(personagem)
    } else {
        acumulador[personagem.raca] = [personagem]
    }
    return acumulador
}, {})

const classess = personagens.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.classe]) {
      acumulador[personagem.classe].push(personagem)
    } else {
      acumulador[personagem.classe] = [personagem]
    }
    return acumulador
  }, {})

console.log(classess)
