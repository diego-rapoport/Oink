const { Router } = require('express');
const express = require('express');
const app = express();


app.use(express.json());


app.get('/login', (req, res) => {
    res.send('Hello World')
    console.log('Requisição HTTP feita')
})

app.use((req, res, next)=> {
    if (req.body.email.includes('@')) next()
    res.send("O email não é valido")
})
    

//ferramente de requisição postman ou insomnia
app.post('/login', (req, res)=>{
    //verificar dados de login
    //fazer login ou não
    res.send(req.body)
})



app.listen(3000, ()=>{
    console.log('Escutando a porta 3000')
})