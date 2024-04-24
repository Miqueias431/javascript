/**
 * Tipagem dinâmica
 * Contantes e variáveis
 */

console.clear()
console.log("STRING_________________________")
let nome = "Miqueias"
console.log(nome)
console.log(typeof (nome))
nome = "Miqueias Rodrigues"
console.log(nome)
console.log(nome.replace("Miqueias", "Miqueias Rodrigues"))
// concatenação
console.log("Teste: " + nome)
console.log(`Teste: ${nome}\n`)

console.log("NUMBERS_________________________")
let peso = 50
let altura = 1.82
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}\n`)

console.log("BOOLEANS_________________________")
let sw = true
console.log(typeof (sw))
console.log(`Chave: ${sw}`)

// ATENSÃO !!!
console.log(10/0)
console.log("3"+2) // concatenação
console.log("3"-2) // subtração
console.log("3"*2) // multiplicação
console.log("3"/2) // divisão
console.log("3x"-2) // NaN (Not a Number)
console.log(0.5 + 0.5) // 1
console.log(0.1 + 0.2) // 0.30000000000000004