// Algoritmo feito na aula

var listaDePecas = ["amortecedor", "motor", "filtro de ar"]
let peso = 50
let nome = "tre"


if (peso < 100){

    console.log("A peça deve pesar no minimo 100g")

} else {

    console.log("A peça foi cadastrada, o peso está ideal")
}


if (listaDePecas.length < 10){
    
    console.log("É possivel cadastrar mais peças")

} else {
    
    console.log("a caixa está cheia")
}


if (nome.length < 3){

    console.log("O nome da peça é invalido, por favor tente outro")

} else{
    
    console.log("nome aceito")
}