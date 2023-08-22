const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const dataAlumniRoutes = require('./routes/dataAlumniRoutes')
const port = 5656
const app = express()
app.use(express.json())
app.use(cors())
app.use(dataAlumniRoutes)

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true  
}).then(() =>{
    console.log('database connected!')
}).catch((err) =>{console.log(err)})

app.get('/', (req, res)=>{
    res.send('connected!')
})

app.listen(port,() =>{
    console.log(`server listed on http://localhost:${port}/`)
})