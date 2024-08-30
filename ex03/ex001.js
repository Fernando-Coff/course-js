
class Pessoa{

    constructor(nome="Pablo", idade=50, profissão="Caminhoneiro"){
        this.nome = nome
        this.idade = idade
        this.profissão = profissão
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }

    jogar(){
        console.log(`${this.nome} esta jogando.`)
    }
}

class João extends Pessoa{
    constructor(nome="João", idade=22, profissão="Estudante"){
        super(nome, idade, profissão)
    }

    trabalhar(){
        console.log(`${this.nome} está trabalhando...`)
    }
}

const joao = new João()
const pessoa_2 = new Pessoa("Luiz", 22, "Programador")

pessoa_2.falar()

joao.falar()
joao.jogar()
joao.trabalhar()