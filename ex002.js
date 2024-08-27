
var numeros = [-3, 7, 0, -12, 5, 2, -9, 11, -4, 0, 8, -6, 1, -2, 3, 10, -5, 0, 9, -7]
var positivos = 0, negativos = 0, zeros = 0

numeros.forEach(function(value, index){
    if(value < 0){
        negativos++
    }else if(value == 0){
        zeros++
    }else{
        positivos++
    }
})

var por_negativo =  negativos*100 /numeros.length, por_positivo = positivos*100 /numeros.length, por_zeros = zeros*100/numeros.length

console.log(`Positivos: ${positivos}\nNegativos: ${negativos}\nZeros: ${zeros}\n`)
console.log(`Positivos: ${por_positivo}%\nNegativos: ${por_negativo}%\nZeros: ${por_zeros}%`)