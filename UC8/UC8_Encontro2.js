// Atividade realizada durante o segundo encontro da UC8
// Autor: Gabriel de Nazaré -> SUPerchokki

let numeroDeAlunos = 10

for(let i = 0; i <= numeroDeAlunos; i++){

    if(i == 0){
        console.log(`o numero atual é zero`)
    } else if (i % 2 == 0){
        console.log(`o numero ${i} é par`)
    } else if (i % 2 == 1){
        console.log(`o numero ${i} é impar`)
    } else {
        console.log("erro")
    }
}