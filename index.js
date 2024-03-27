require('dotenv').config()
const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('<h1>hello world</h1>')
})

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is up and running`)
})