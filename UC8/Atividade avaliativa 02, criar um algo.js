//Atividade avaliativa 02, criar um algoritmo baseado no fluxograma da atividade 01
//Autor: Gabriel de Nazaré Exposto Martins Farias // SUPerchokki, 18/02/2022

// Declaração das variaveis
let sePalestrante = "nao" 
let participantes = ["Gabriel", "Joao", "Maria", "Pedro", "Rodrigo"]
let palestrantes = ["Renato", "Leandro", "Roberto França", "Rogério"]
let dataEvento = new Date("2022-02-22")
let dataAtual = new Date() 
let idade = 19
let nome = "Claudio"

//Primeiro perguntar se ele deseja ser um palestrante
console.log("Deseja se cadastrar como participante?")
if (sePalestrante == "sim" || "s"){
    
    //cadastro de palestrante
    console.log("Seguindo cadastro de palestrante")
    palestrantes.push(nome)

} else if (sePalestrante == "nao" || "n"){
    
    //mensagem para seguir o cadastro
    console.log("seguindo cadastro de participante")

} else {

    //erro caso o usuario responda algo inesperado
    console.log("por favor digite uma palavra valida sim/nao")
}

//verificando se a lista já esta cheia
if (participantes.length < 100){

    //verificando a data
    if (dataEvento < dataAtual){
        console.log("o evento já passou")
    } else {
        console.log("o evento sera dia: " + dataEvento)
    }

    //verificando a idade
    if (idade < 18){
        console.log("Você precisa ser maior de idade para participar do evento")
    } else if(idade == 0){
        console.log("por favor insira uma idade valida")
    } else{
        console.log("Idade permitida para participar")
    }

    //inserindo o nome
    console.log("insira seu nome: ")
    participantes.push(nome)

} else {
    console.log("Infelizmente a lista de participantes esta cheia")
}

//final do codigo
console.log("Nossos palestrantes: ")
console.log(palestrantes)
console.log("lista de participantes: ")
console.log(participantes)