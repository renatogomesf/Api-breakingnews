import express from 'express'
import userRoute from './src/routes/user.route.js'
import connectDatabse from './src/database/db.js'


const app = express()
const port = process.env.PORT || 3000

connectDatabse()

app.use(express.json())
app.use('/user', userRoute)


app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})