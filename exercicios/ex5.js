let cidades = []
let contator = 0

let nome = prompt("Digite seu nome:")
let pergunta = confirm("Você ja visitou alguma cidade?")

while(pergunta === true){
    cidades.push(prompt("digite ela aqui"))
    pergunta = confirm("Você ja visitou MAIS alguma cidade?")
    contator += 1
}

alert(nome + " ja visitou " + contator + " cidades:\n " + cidades)
