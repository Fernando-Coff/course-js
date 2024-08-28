// Objeto em JavaScript


/*
const pessoas = [{
    "Nome" : "Gulherme",
    "Idade" : 19,
    "Profissão" : "Programador"
},{
    "Nome" : "Luiz",
    "Idade" : 22,
    "Pofissão:" : "Estudante"
}]

console.log(pessoas[0].Idade)
*/

/*
function pessoa(nome){
    this.nome = nome
}

var pessoa_1 = new pessoa("Luiz")
var pessoa_2 = new pessoa("Guilherme")

console.log(pessoa_1.nome)
console.log(pessoa_2.nome)
*/


function Pessoa(nome="José", idade=99, profissão="Aposentado"){
    this.nome = nome
    this.idade = idade
    this.profissão = profissão

    this.printNome = function(){
        console.log(`Meu nome é ${this.nome}.`)
    }

    this.printIdade = function(){
        console.log(`Eu tenho ${this.idade} anos de idade.`)
    }

    this.printProfissão = function(){
        console.log(`Minha profissão é ${this.profissão}`)
    }

    this.printAnimal = function(){
        console.log(`Meu animal de estimação é uma ${animal.nome}.`)
    }

}

function Animal(nome="Gato"){
    this.nome = nome
}

const pessoa = new Pessoa("Luiz", 20, "Estudante")
const animal = new Animal("Jaguatirica")

pessoa.printNome()
pessoa.printAnimal()