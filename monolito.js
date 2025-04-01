const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []
let pedidos = []

// Rota para cadastrar usuários

app.post("/usuarios", (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario)
    res.send({message: "Usuario cadastrado com sucesso", usuario})
})

app.post("/pedidos", (req, res) => {
    const usuario = req.body;
    pedidos.push(pedido)
    res.send({message: "Pedido Criado", pedido})
})

app.get("/dados", (req, res) =>{
    res.send({usuarios})
})

app.listen(3000, () => console.log("Servidor monolitico ok, na porta 3000"))