/**
 *  Assincronismo
 *  Promises
 * @author Miquéias Rodrigues
 */

const read = require('readline-sync')

// Simulação do banco usando uma estrutura de dados
const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    prof: {
        usuario: "Miquéias Rodrigues",
        senha: "123456"
    }
}

// Autenticação de usuário

console.clear()
console.log("-----------------------")
console.log("Autenticação de usuário")
console.log("-----------------------")
// entrada de dados (captura do login e senha)
let login = read.question("Login: ")
let senha = read.question("Senha: ")
console.log("-----------------------")

// execultando uma função assincrona com uso de promise
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(`Erro de autenticação. ${error}`)
    })

// Função logar (autenticação de usuário)
function logar(login, senha) {
    // uso de promise para trabalhar e requisição ao
    // banco de dados de froma assíncrona
    return new Promise((resolve, reject) => {
        // uso do setTimeout para simular um atraso
        setTimeout(() => {
            // lógica para autenticar um usuário
            if (database.hasOwnProperty(login)) {
                if (database[login].senha === senha) {
                    resolve(`Login efetuado com sucesso. Olá, ${database[login].usuario} ` )
                } else {
                    reject(" Login e/ou senha inválidos! ")
                }
            } else {
                reject(" Usuário não encontrado. Por favor, verifique o login! ")
            }
        },2000)
    })
}

