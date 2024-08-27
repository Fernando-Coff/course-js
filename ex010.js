// Calculadora dinâmica 

// Pagar numero inicial - Pegar tipo de operação - Pegar numero final - Resultado no console

function pegaNumero(){

    let numero = Number(prompt("DIGITE UM NÚMERO"));

    while(isNaN(numero) == true){
        numero = Number(prompt("DIGITE APENAS NÚMEROS"));
    }
    
    return numero
}

function pegaSinal(){

    let sinal = prompt("INFORME O SINAL DA OPERAÇÃO")
    while(sinal != "+" && sinal != "-" && sinal != "*" && sinal != "/"){
        sinal = prompt("INFORME UM SINAL VÁLIDO")
}
    return sinal
}

const n1 = pegaNumero()
const sinal = pegaSinal()
const n2 = pegaNumero()



if(sinal == "+"){
    resultado = n1+n2
}else if(sinal == "-"){
    resultado = n1-n2
}else if(sinal == "*"){
    resultado =  n1*n2
}else if(sinal == "/"){
    resultado = n1/n2
}           

window.alert(`O resultado é ${resultado}`)  