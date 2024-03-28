//Functions
function aleatorio(max, min){
    return Math.floor(Math.random() * (max - min + 1) + 1)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra 🪨"
    } else if(jugada == 2){
        resultado = "Papel 📃"
    } else if(jugada == 3){
        resultado = "Tijera ✂️"
    } else {resultado = "You selected to be a LOSER"
    }     
    return resultado          
}

function marcador(){
    let resultado2 = ""

    if(pc == jugador){
        resultado2 = "Draw ⚔️"
    } else if(jugador == 1 && pc == 3){
        resultado2 = "You win 🏆"
        triunfos = triunfos + 1
    } else if(jugador == 2 && pc == 1){
        resultado2 = "You win 🏆"
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2){
        resultado2 = "You win 🏆"
        triunfos = triunfos + 1
    } else{
        resultado2 = "You lose 👎"
        perdidas = perdidas + 1
    }     
    return resultado2
}

//Core
let jugador = 0
let min = 1
let max = 3
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3){
    pc = aleatorio(3, 1)
    jugador = prompt("Select 1 for Piedra, 2 for Papel or 3 for Tijera")


    alert("Tu eliges: " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc))
    alert(marcador())
}

//Results
alert("You won " + triunfos + " times and lost " + perdidas + " times.")
if(triunfos > perdidas){
    alert("You are a fucking GOD")
} else{
    alert("Keep trying LOSER")
}       
