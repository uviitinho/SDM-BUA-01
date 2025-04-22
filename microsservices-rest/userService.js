const express = require('express');
const axios = require('axios');


const app = express();

app.use(express.json());  // Middleware to parse JSON request bodies

app.post('/usuarios', async (req, res) => {
    const usuario  = req.body;

    //
   await axios.post('http://localhost:4000/pedidos', {userId: usuario.id});

   res.send({message: 'Usuario cadastrado com sucesso!', usuario});
});


app.listen(3000, () => console.log('User Service rodando  na porta 3000'));