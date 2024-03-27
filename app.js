const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('<h1>hello</h1>')
})
module.exports = app