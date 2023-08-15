const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const user = require('./models/user')
const port = 5656
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true  
}).then(() =>{
    console.log('database connected!')
}).catch((err) =>{console.log(err)})


app.listen(port,() =>{
    console.log(`server listed on http://localhost:${port}/`)
})