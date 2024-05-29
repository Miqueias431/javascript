/**
 * Assincronismo
 * Fetch (Promise simplificada)
 * @author Miquéias Rodrigues
 */

const read = require('readline-sync')
console.clear()
console.log("VIA CEP")

let cep = read.question("Digite o CEP: ")
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
// Apoio ao entedimento da lógica
// console.log(urlAPI)
// Uso de promise para recuperar os dados de WEB SERVICE (API)

fetch(urlAPI)
    // para obter os dados
    .then((response) => {
        return response.json()
    })
    // para manipular os dados
    .then((dados) => {
        console.log(`logradouro: ${dados.logradouro}`)
        console.log(`bairro: ${dados.bairro}`)
        console.log(`localidade: ${dados.localidade}`)
        console.log(`uf: ${dados.uf}`)
        console.log(`ddd: ${dados.ddd}`)
        console.log(` `)
    })
    .catch((error) => {
        console.log(`Erro ao obter o endeteço: ${error}`)
    })
