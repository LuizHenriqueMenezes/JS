let firstName = prompt("Digite o nome do primeiro carro")
let firstSpeed = prompt("Agora, a velocidade alcançada pelo primeiro carro")

let secondName = prompt("Digite o nome do segundo carro")
let secondSpeed = prompt("Agora, a velocidade alcançada pelo segundo carro")

let speedOne = parseFloat(firstSpeed)
let speedTwo = parseFloat(secondSpeed)

if(speedOne > speedTwo){
    alert("Com a velocidade de " + firstSpeed + ", " + firstName + " é mais rapido que " + secondName + ", com  a velocidade de " + secondSpeed)
}else if(speedOne === speedTwo){
    alert("Os carros tem a mesma velocidade")
}else{
    alert("Com a velocidade de " + secondSpeed + ", " + secondName + " é mais rapido que " + firstName + ", com  a velocidade de " + firstSpeed)
}