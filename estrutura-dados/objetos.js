/**
 * Estrutura de dados - Objetos
 * @author Miqueias Rodrigues
 */

const funcionario1 = {}
// Add dados a estrutura (CRUD create) 
console.log(typeof funcionario1)
funcionario1.nome = 'Miqueias'
funcionario1.cargo = 'Programador'
funcionario1.email = '2hJwT@example.com'
funcionario1.salario = 10000
funcionario1.insta = '@miqueiasrodrigues'
// Listar os dados da estrutura (CRUD read)
console.log(funcionario1)
console.log(funcionario1.cargo)
// Atualizar os dados da estrutura (CRUD update)
funcionario1.nome = 'Miqueias Rodrigues'
console.log(funcionario1)
// Deletar os dados da estrutura (CRUD delete)
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: 'Bruno Oliveira',
    cargo: 'CEO',
    email: 'bruno@example.com',
    salario: 20000
}
console.log(funcionario2)

const endereco1 = {
    logradouro: 'Rua das flores',
    cidade: 'São Paulo',
    estado: 'SP'
}
console.log(endereco1)

const funcionario3 = {
    nome: 'Andre Barbosa',
    cargo: 'Gerente',
    email: 'andre@example.com',
    salario: 30000,
    ...endereco1 // Spread Operator
}
console.log(funcionario3)

const funcionario4 = {
    nome: 'Tiago Melo',
    cargo: 'Programador',
    email: 'tiago@example.com',
    salario: 4000,
    ...endereco1 // Spread Operator
}
console.log(funcionario4)

const funcionario5 = {
    nome: 'Tony Stark',
    cargo: 'CEO',
    email: 'tony@example.com',
    salario: 50000,
    armadura: {
        versao: 'Mark 2',
        ano: 2010,
        reator: 'Arc 01'
    },
    suitUp: () => {
        console.log('🤖')
    }
}

console.log(funcionario5)
console.log(funcionario5.armadura.versao)
funcionario5.suitUp() // Executar uma função interna da estrutura