
var frutas = ["Banana ", "Maçã ", "Abacaxi ","Uva ", "Morango ","Laranja ", "Pera ",
    "Melancia ", "Limão ","Coco ", "Manga ","Abacate ", "Cereja ","Amora", "Framboesa", 
    "Kiwi ", "Figo","Romã", "Pêssego", "Caqui", "Maracujá"]

function Fruta(fruta, inicial){
    if(fruta[0] == inicial){
        console.log(fruta)
    }
}

for(var i = 0; i < frutas.length; i++){
    Fruta(frutas[i], "M")
}