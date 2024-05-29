/**
 * assincronismo
 * async
 * @author Miquéias Rodrigues
 */

//importar biblioteca nativa (javascript) para trabalhar com manipulação de arquivos (fs - file system)

const fs = require ('fs')

//função para criar um arquivo
async function criarArquivo() {
    let conteudo = 'Luis Antonio\nExemplo de uso dos recursos async - await'
    await gravarArquivo('teste.txt', conteudo)
}

//função para gravar o arquivo
async function gravarArquivo(local, conteudo) {
    try {
        await fs.promises.writeFile(local, conteudo)
        console.log('Arquivo criado com sucesso')
    } catch (error) {
        console.log(error)
    }
}

criarArquivo()

