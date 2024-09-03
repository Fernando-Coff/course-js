const ciao = () => "Bela ciao!"
const soma = (n1, n2) => n1+n2
const hi = name => `Hi, ${name}`


const fatorial = num =>{
    
    var resultado = num

    for(var i= 1; i < num; i++){
        resultado *= i
    }
    
    return resultado
}

console.log(fatorial(5))