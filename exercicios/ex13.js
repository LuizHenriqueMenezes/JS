let opcao, value, value2, value3

function areaDoTriangulo(a, b) {
    return alert("A área do triângulo de " + a + " e " + b + " é: " + ((a * b) / 2))
}

function areaDoRetangulo(a, b) {
    return alert("A área do retângulo de " + a + " e " + b + " é: " + (a * b))
}

function areaDoQuadrado(a) {
    return alert("A área do quadrado de " + a + " é: " + (a * a))
}

function areaDoTrapezio(a, b, c) {
    return alert("A área do trapezio de " + a + ", " + b + " e " + c + " é: " + ((a * b) * c / 2))
}

function areaDoCirculo(a) {
    return alert("A área do círculo de " + a + " é: " + (3.14 * (a * a)))
}

do {
    opcao = prompt("--- Calculadora Geométrica ---\n" +
        "Escolha uma opção: \n" +
        "1. Área do Triângulo \n" +
        "2. Área do Retângulo\n" +
        "3. Área do quadrado\n" +
        "4. Área do Trapézio\n" +
        "5. Área do Círculo\n" +
        "6. SAIR")

    switch (opcao) {
        case "1":
            value = parseFloat(prompt("Para calcular a área do triângulo, primeiro digite a base:"))
            value2 = parseFloat(prompt("E a altura:"))
            areaDoTriangulo(value, value2)
            break;
        case "2":
            value = parseFloat(prompt("Para calcular a área do retângulo, primeiro digite a base:"))
            value2 = parseFloat(prompt("E a altura:"))
            areaDoRetangulo(value, value2)
            break;
        case "3":
            value = parseFloat(prompt("Para calcular a área do quadrado, digite o lado:"))
            areaDoQuadrado(value)
            break;
        case "4":
            value = parseFloat(prompt("Para calcular a área do trapézio, primeiro digite a base maior:"))
            value2 = parseFloat(prompt("A base menor:"))
            value3 = parseFloat(prompt("E a altura:"))
            areaDoTrapezio(value, value2, value3)
            break;
        case "5":
            value = parseFloat(prompt("Para calcular a área do círculo, digite o raio:"))
            areaDoCirculo(value)
            break;
        case "6":
            alert("saindo...")
            break
        default:
            alert("DIGITE UMA OPÇÃO VÁLIDA...")
            break;
    }
} while (opcao !== "6");