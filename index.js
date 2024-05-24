import express from 'express'
import userRoute from './src/routes/user.route.js'

const app = express()

const port = process.env.PORT

app.use(express.json())

app.use('/soma', userRoute)



app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})