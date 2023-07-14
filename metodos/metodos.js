let person = {
    nome: "Luiz",
    age: 18,
    sayHello(){
        alert("Hello word. My name is " + this.nome) // esse this é uma palavra reservada pra gente poder ref. do prórpio objeto
    }
}

person.sayHello()