/* 

1- Ler um número inteiro (Garantir que o numero seja inteiro e positivo)
2- Calcular a formula: E = 1 + (1 / 1!) + (1 / 2!) + (1 / 3!) + .... + (1 / N!)

*/

var numero = Number(prompt("DIGITE UM NÚMERO"));
while(numero < 0 || Number.isInteger(numero) == false){
    numero = Number(prompt("DIGITE UM NÚMERO POSITIVO E INTEIRO"));
}




function somarE(valor){

    let N = valor
    let E = 1
    let fat = N

    for(var i = 1; i < N; i++){
        fat *= i 
        E += i/fat
    }

    console.log(E)
}

somarE()
