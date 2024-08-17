const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const players = []

class Player {
    constructor(id){
        this.id = id
    }

    assignMokepon(mokeponBackend){
        this.mokeponBackend = mokeponBackend
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
    const name = req.body.mokeponBackend || ""
    const mokepon = new Mokepon(name)
    console.log("Received playerId in backend:", playerId); // Add this for debugging
    
    const playerIndex = players.findIndex((player) => playerId === playerId)

    if(playerIndex >= 0){
        players[playerIndex].assignMokepon(mokepon)
    }

    console.log(players)
    console.log(playerId)
    res.end()
})

app.post("/mokepon/:playerID/position", (req, res) => {
    const playerId = req.params.playerId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const playerIndex = players.findIndex((player) => playerId === playerId)

    if(playerIndex >= 0){
        players[playerIndex].updatePosition(x,y)
    }

    res.end()
})



app.listen(8080, () => {
    console.log("Server working")
})