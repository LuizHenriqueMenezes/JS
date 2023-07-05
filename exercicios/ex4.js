let metro = prompt("-- CONVERSOR DE MEDIDAS --\n Primeiro, insira um valor em metros:")
let opcao = prompt("Agora, escolha uma letra:\n a) milímetro\n b) centímetro\n c) decímetro\n d) decâmetro\n e) hectômetro\n f) quilômetro")
let result

switch (opcao) {
    case "a":
        result = metro * 1000
        alert(metro + " metros é igual a: " + result + "mm")
        break
    case "b":
        result = metro * 100
        alert(metro + " metros é igual a: " + result + "cm")
        break
    case "c":
        result = metro * 10
        alert(metro + " metros é igual a: " + result + "dm")
        break
    case "d":
        result = metro / 10
        alert(metro + " metros é igual a: " + result + "dam")
        break
    case "e":
        result = metro / 100
        alert(metro + " metros é igual a: " + result + "hm")
        break
    case "f":
        result = metro / 1000
        alert(metro + " metros é igual a: " + result + "km")
        break
    default:
        alert("COLOQUE UM VALOR VALIDO")
        break
}
