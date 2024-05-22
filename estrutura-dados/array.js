/**
 * Estrutura de dados
 * Array (vetor e matriz)
 * @author Miquéias Rodrigues
 */

let alunosEM1 = ["Diogo","Tania","Pedro","Maria","Viviane","Rogerio"]

console.log(typeof alunosEM1)
// determinando o tamanho de uma array
console.log(alunosEM1.length)
// Exibindo os dados de um array (CRUD Create)
console.log(alunosEM1[1])
console.log(alunosEM1)
console.table(alunosEM1)
// Adicionando dados ao array (CRUD Read)
alunosEM1.push("Joaquim")
console.table(alunosEM1)
