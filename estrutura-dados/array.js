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
// Atualizando dados do array (CRUD Update)
alunosEM1[0] = "Diego"
console.table(alunosEM1)
// Deletando dados do array (CRUD Delete)
alunosEM1.pop() // Exclui o ultimo registro
console.table(alunosEM1)
delete alunosEM1[3] 
console.table(alunosEM1)
// percorrendo um array
let notas = [3,8,5,9,2]
console.log(notas)
console.table(notas)
// laço for
for(let i = 0; i < notas.length; i++){
    console.log(notas[i])
}
// laço forEach
notas.forEach((n) => {
    console.log(n)
})
//map()
// Exemplo 1: Adicionar 1 ponto as notas
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(notas)
console.log(notasAtualizadas)
// Exemplo 2: Conversão do sistema de pontos para letras
//NA (não atendeu (nota < 5))
//PA (parcialmente atendido(nota entre 5 e 7))
//A (atendeu (nota > 7))
let notasConvertidas = notas.map((nc) =>{
    if(nc < 5){
        return ("NA")
    }else if(nc > 7){
        return ("A")
    }else{
        return ("PA")
    }
})
console.log(notas)
console.log(notasConvertidas)

// iniciando um array como um objeto
console.clear()
let alunosEM2 = new Array("Tony","Peter","Thor","Natasha")
console.log(alunosEM2)
console.table(alunosEM2)

// Estrutura de dados
let alunosEM3 = [
    {
    nome:"Bruce",
    idade: 30,
    bolsista: false
    },
    {
    nome:"Clark",
    idade: 50,
    bolsista: false
    },
    {
    nome:"Diana",
    idade: 41,
    bolsista: false
    },
    {
    nome:"Barry",
    idade: 23,
    bolsista: true
    }
]

console.log(alunosEM3)
console.table(alunosEM3)

// Filtros
// Ordenar A - Z
alunosEM3.sort((a,z) =>{
    return a.nome.localeCompare(z.nome)
}) 
console.table(alunosEM3)

// Menor idade para maior
lunosEM3 = alunosEM3.sort((x,y) =>{
    return (x.idade - y.idade)
}) 
console.table(alunosEM3)

// ATENÇÃO (Criando uma cópia para exibição)
let alunosOrdenados = [...alunosEM3]
alunosOrdenados.sort((a,z) =>{
    return a.nome.localeCompare(z.nome)
}) 
console.table(alunosOrdenados)

// buscas personalizadas em um array
// Exemplo 1: Alunos Bolsistas
console.table(alunosEM3.filter((b)=>{
    return (b.bolsista)
}))

// Exemplo 2: Alunos com mais de 40 anos
console.table(alunosEM3.filter((i)=>{
    return (i.idade > 40)
}))