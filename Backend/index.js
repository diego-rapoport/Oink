const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('./models/usuario')

const app = express();


app.use(express.json());

mongoose.connect('mongodb://127.0.0.1/oinkdb',function(erro){
    if (erro) throw erro
    console.log('mongodb conectado')
})

app.get('/listadeusuarios', async  (req, res) => {
    const listaUsuarios = await Usuario.find()
    res.send(listaUsuarios) 
})

app.post('/novousuario', async (req,res) => {
    //let {email, senha} = req.body
    const email = req.body.email
    const senha = req.body.senha 
    const usuarioCriado = await Usuario.create({email:email,senha:senha})
    usuarioCriado.save(function(erro, usuario){
        if (erro) return res.send(erro)
        return res.send(usuario)
    })
  })


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