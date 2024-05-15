/**
 * Fundamento da POO
 * Encapsulamento
 * @author Miqueias Rodrigues
 */

class User {
    // atributos
    constructor(login, senha) {
        this.login = login
        // encapsulamento
        let _senha = senha
        this.getSenha = () => _senha
        this.setSenha = (novaSenha) => _senha = novaSenha
    }
    // Ação(Metodos)
    logar() {
        console.log("_____________________")
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === 'admin' && this.getSenha() === 'admin123') {
            console.log("Login efetuado com sucesso!")
        }else {
            console.log("Login e/ou senha inválidos!")
        }
    }
}

// sistema
console.clear()
const user1 = new User('admin', 'admin152')
user1.logar()
// usando o método set para setar uma nova senha (encapsulamento)
user1.setSenha('admin123')
user1.logar()