alert("Olá player, vamos coletar os dados dos personagens!")
let damage
let rest

let firstCharacter = prompt("Digite o nome do primeiro personagem:")
let powerAtack = prompt("E seu poder de ataque:")

let secondCharacter = prompt("Agora, digite o nome do segundo personagem:")
let healthPoints = prompt("Diga também a quantidade de pontos de vida desse personagem:")
let powerDefense = prompt("E seu poder de defesa:")
let shield = confirm("Ele possui um escudo?")

let pa = parseFloat(powerAtack)
let pd = parseFloat(powerDefense)
let hp = parseFloat(healthPoints)

if(pa > pd && shield === false){
    damage = pa - pd
    rest = hp - damage
}
if(pa > pd && shield === true){
    damage = (pa - pd) / 2
    rest = hp - damage
}
if(pa <= pd){
    damage = 0
    rest = hp - damage
}

alert("Quantidade de dano causado por " + firstCharacter + " foi " + pa + ". Levando em conta o poder de defesa de " + powerAtack + "do " + secondCharacter + ", e o fato da escolha do escudo, sobrou " + rest + " HP.")



