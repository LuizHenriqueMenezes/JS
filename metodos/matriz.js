const array = [
    [1, 2, 3],
    [2, "vai exibir isso aqui", 6],
    [7, 
        ["isso aqui não acaba nunca lkkkkk" , 2, 3], 
    9]
]

alert(array[1][1]) 
alert(array[2][1][0])
array[0].push(parseFloat(prompt("adicionar")))
alert(array[0][3])

console.table(array)