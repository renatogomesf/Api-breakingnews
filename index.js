import express from 'express'

const app = express()

const port = process.env.PORT

app.get('/', (request,response)=>{
    response.status(200).send('opa')
})

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})