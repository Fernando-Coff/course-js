
var numeros = [-42, 17, 0, -99, 56, -3, 81, 25, -12, 4 ]
var div_2 = 0, div_3_9 = 0, div_5 = 0

numeros.forEach(function(values, index){

    if(values%2 == 0){
        div_2++
        if(values%3 == 0 || values%9 == 0){
            div_3_9++
            if(values%5 == 0){
                div_5++
            }
        }else if(values%5 == 0){
            div_5++
        }


    }else if(values%3 == 0 || values%9 == 0){
        div_3_9++
        if(values%5 == 0){
            div_5++
        }

    }else if(values%5 == 0){
        div_5++
    }
})

console.log(`Divisiveis por 3 e 9: ${div_3_9}\nDivisiveis por 2: ${div_2}\nDivisiveis por 5: ${div_5}`)