
function apresentandoAlguem(){
    let nome = "Luiz"
    function saudacao(){
        console.log(`Olá, ${nome}.`)
    }
    function despedida(){
        console.log(`Foi um prazer te conhecer, ${nome}.`)
    }
    return{
        saudacao: saudacao,
        despedida: despedida
    }
}

const pessoa = apresentandoAlguem()
pessoa.saudacao()
pessoa.despedida()