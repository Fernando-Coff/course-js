var numeros = [-3, 7, 0, -12, 5, 2, -9, 11, -4, 0, 8, -6, 1, -2, 3, 10, -5, 0, 9, -7]
var positivos = 0, negativos = 0, zeros = 0

/*
for(var i = 0; i < values.length; i++){
    if(numeros[i] < 0){
        negativos++
    }else if(numeros[i] ==0){
        zeros++
    }else{
        positivos++
    }
}
*/

// JavaScript - Moderno
numeros.forEach(function(value, index){
    if(value < 0){
        negativos++
    }else if(value == 0){
        zeros++
    }else{
        positivos++
    }
})

console.log(`Positivos: ${positivos}\nNegativos: ${negativos}\nZeros: ${zeros}`)