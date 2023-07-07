let i, num
let tabu = [] //tabu.push(prompt("jwd"))
let choice = prompt("CALCULADORA DE TABUADA\n Qual numero você escolhe?")
num = parseFloat(choice)

for(i = 1; i <= 20; i++){
    tabu[i] = num * i
    alert(num + " x " + i + " = " + tabu[i])
}
