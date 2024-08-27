// Arrays

/*
const nomes = ["Gulherme", "Felipe", "João", "Marcos", "Paulo"];
nomes[0] = "Luiz Fernando";
nomes.push("Gabriel")
console.log(nomes);
*/

// Condições

/*
const nome = "Luiz";
const idade = 10;

if (nome == "Luiz" && idade == 9) {
    console.log('if');
}else if (nome == "Marcos" || idade == 10) {
    console.log('else if');
}else{
    console.log('Else');
}
*/

// Funções 

/*
function Mensagem(nome, idade){
    console.log(`Seja bem-vindo, ${nome}. \nA idade informada é ${idade} anos.\n`);
}

function PegarNome(par=0){
    
    if(par == 1){
        return 'Luiz Fernando'
    }else if(par == 2){
        return 'Gabriel'
    }else{
        return 'Outro nome'
    }
}

Mensagem('Diego', 23);
Mensagem('Luiz Fernando', 19);

var nome = PegarNome()
console.log(nome)
*/

// Funções 2


/*
var PegarNome = function(select){
    if (select <= 1){
        return 'Luiz'
    } else if (select >=2 && select <=4 ){
        return 'Gilherme'
    }else{
        return 'Outro nome'
    }
}

nome = PegarNome(5)
console.log(nome)
*/

// Laços de repetições

/*
var contador = 0

while(contador < 10){
    console.log('Hello, world')
    contador++
}
*/

/*
for(var i=0; i < 10; i++){
    console.log('Hello, world')
}
*/    

/*
var n = 0

do{
    console.log(n)
    n++
}while(n<10)
*/

// ForEach

/*
const nomes = ["Gilherme", "Luiz", "João", "Marcos", "Feliphe"]

for(var i =0; i < nomes.length; i++){
    console.log(nomes[i])
}

nomes.forEach(function(value, index){
    console.log(value, index)
})
*/

