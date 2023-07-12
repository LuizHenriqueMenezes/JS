function dobro(x){
    alert("O dobro de " + x + " é: " + (x * 2))
}

let x = parseFloat(prompt("Digite um number"))
dobro(x)
dobro(40)

////////////////////////////////////////////////////////////////////

function hello(name){
    alert("Olá, " + name + "!")
}

let name = prompt("Digite seu nome")
hello(name)

////////////////////////////////////////////////////////////////////

function soma(a, b){
    alert("Resultado da soma: " + (a + b))
}

let num = parseFloat(prompt("Digite o primeiro number"))
let ndois = parseFloat(prompt("Digite o segundo number"))
soma(num, ndois)

//////////////////// ordem ////////////////////////////////////////

function criarUsuario(nome, email, senha, tipo){
    const usuario = {
        nome, // nome: nome, o js abrevia
        email,
        senha,
        tipo
    }

    alert("Nome: " + usuario.nome +
    "\nE-mail: " + usuario.email +
    "\nSenha: " + usuario.senha + " (iih vazou)" +
    "\nTipo: " + usuario.tipo)
}

criarUsuario(name, "gmail@.com", "12345", "adm")

// dica: quando tem uma função com muitos parametros, 
// fazer um objeto para armazenar tudo e virar o único parâmetro. 