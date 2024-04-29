/**
 * Operadores
 * Aritméticos, lógicos e comparadores
 * @author Miqueias Rodrigues
 */

console.clear()
console.log("Operadores Aritméticos")
console.log("+ | soma")
console.log("- | subtração")
console.log("* | multiplicação")
console.log("/ | divisão")
console.log("% | módulo (resto da divisão)")
// atenção a regra de precedência
console.log(2+2/2)
console.log((2+2)/2)
// resto da divisão
console.log(10%3)

console.log("Operadores Aritméticos de atribuição")
console.log("+= | soma e atribui o valor a variável")
console.log("-= | subtração e atribui o valor a variável")
console.log("*= | multiplicação e atribui o valor a variável")
console.log("/= | divisão e atribui o valor a variável")
console.log("++ | soma 1 do resultado")
console.log("-- | subtração 1 do resultado")

// exemplos
let x = 2
x += 2
console.log(x)
x++
console.log(x)

console.log("Comparadores")
console.log("> | maior que")
console.log("< | menor que")
console.log(">= | maior ou igual a")
console.log("<= | menor ou igual a")
console.log("== | igual a")
console.log("=== | estritamente igual a")
console.log("!= | diferente de")
console.log("!== | estritamente diferente de")
