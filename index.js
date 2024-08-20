const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.static(`public`))
app.use(cors())
app.use(express.json())

const players = []

class Player {
    constructor(id){
        this.id = id
    }

    assignMokepon(mokepon){
        this.mokepon = mokepon
    }

    assignAttacks(attacks){
        this.attacks = attacks
    }

    updatePosition(x,y){
        this.x = x
        this.y = y
    }
}

class Mokepon{
    constructor(name){
        this.name = name
    }
}

app.get("/join", (req, res) => {
    const id = `${Math.random()}`

    const player = new Player(id)
    players.push(player)

    res.setHeader("Access-Control-Allow-Origin", "*")
    
    res.send(id)
})

app.post("/mokepon/:playerId", (req, res) =>{
    const playerId = req.params.playerId || ""
    const name = req.body.mokepon || ""
    const mokepon = new Mokepon(name)
    
    const playerIndex = players.findIndex((player)=>playerId===player.id)

    if(playerIndex >= 0){
        players[playerIndex].assignMokepon(mokepon)
    }

    console.log(players)
    console.log(playerId)
    res.end()
})

app.post("/mokepon/:playerId/position", (req, res) => {
    const playerId = req.params.playerId || ""
    const x = req.body.x || 0 //Requests value from frontend on x
    const y = req.body.y || 0 //Requests value from frontend on y

    const playerIndex = players.findIndex((player) => playerId === player.id)

    if(playerIndex >= 0){ //Updates position of pet in x and y
        console.log(`Updating player ${playerId} position to (${x}, ${y})`);
        players[playerIndex].updatePosition(x ,y)
    }

    const enemies = players.filter((player) => playerId !== player.id) //Returns an array of only enemies

    res.send({
        enemies
    })
})


app.post("/mokepon/:playerId/attacks", (req, res) =>{ //Post to receive chosen attacks
    const playerId = req.params.playerId || ""
    const attacks = req.body.attacks || [] //Extracting the variable attacks from the frontend
    
    const playerIndex = players.findIndex((player)=>playerId===player.id) //Validate that a mokepon has been chosen

    if(playerIndex >= 0){ //Assigning attacks
        players[playerIndex].assignAttacks(attacks)
    }

    res.end()
})


app.get("/mokepon/:playerId/attacks", (req, res) => {
    const playerId = req.params.playerId || ""
    const player = players.find((player) => player.id === playerId)
    res.send({
        attacks: player.attacks || []
    })
})



app.listen(8080, () => {
    console.log("Server working")
})