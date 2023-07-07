const word = prompt("Qual palavra você quer verificar se é um palíndromo?")
let wordInverted = ""

for(let i = word.length - 1; i >= 0; i--){
    wordInverted += word[i]
}

if(word === wordInverted){
    alert(word + " é palíndromo")
}else{
    alert(word + " não é palíndromo.\n" + "Veja: " + wordInverted)
}