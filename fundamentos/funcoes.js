/**
 * Estudo dass funções usando a sintaxe moderna da linguagem 
 * @author Miqueias Rodrigues
 */

console.clear()

// Função simples
function hello() {
    console.log("Hello, World!")
}
hello()
console.log(typeof hello)

// Função anonima (atribuida)
const hello2 = function () {
    console.log("Hello function assigned")
}
hello2()
console.log(typeof hello2)

// Função anonima simplificada (Arrow function)
const hello3 = () => {
    console.log("Hello arrow function assigned")
}
hello3()
console.log(typeof hello3)

// Função anonima super simplificada (Arrow function)
const hello4 = _=> console.log("Hello arrow function assigned simplified")
hello4()
console.log(typeof hello4)

// Função simples com retorno
function somarS(num1, num2) {
    return console.log(num1 + num2) // num1 + num2    
}

somarS(2, 3)
console.log(typeof somarS)

// Função anônima com retorno
let somarA = function (num1, num2) {
    return console.log(num1 + num2)
}

somarA(2, 6)
console.log(typeof somarA)

// Função anônima simplificada (Arrow function) com retorno
let somarAF = (num1, num2) => {
    return console.log(num1 + num2)
}

somarAF(2, 4)
console.log(typeof somarAF)

// Função anônima super simplificada (Arrow function) com retorno
let somarAFS = (num1, num2) => console.log(num1 + num2)
somarAFS(2, 4)
console.log(typeof somarAFS)