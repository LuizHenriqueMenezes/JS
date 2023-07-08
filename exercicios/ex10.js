let opition, consultado
let fila = ["Pedro", "Luiza", "Lucas", "Max"]

do {
    opition = prompt("---- MENU HOSPITAL ----\n O que deseja fazer?\n a) Vizualizara fila de espera\n b) Adicionar novo paciente\n c)Consultar paciente\n d)Sair").toUpperCase()
    
    switch(opition){
        case "A":
            for(let i = 0; i < fila.length; i++){
                alert((i + 1) + "° - " + fila[i])
            }
            break
        case "B":
            fila.push(prompt("Digite o nome do paciente pra entrar no fim da fila"))
            alert("Paciente adicionado com sucesso, basta aguardar!")
            break
        case "C":
            consultado = fila.shift()
            alert(consultado + " passou pela sua consulta. Thanks you, next.")
            break
    }
} while (opition !== "D");

alert("saindo...")