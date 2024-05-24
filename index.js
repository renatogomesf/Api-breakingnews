import express from 'express'

const app = express()

const port = process.env.PORT

app.use(express.json())

app.get('/soma', (request,response)=>{

    const soma = 100+1

    response.status(200).send({ soma: soma })
})

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})