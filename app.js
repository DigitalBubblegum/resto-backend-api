const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./controllers/userRouter')
const logger = require('./utils/logger')

app.use(cors())
app.use(express.json())
app.get('/',(_req,res)=>{
    res.send('<h1>hello</h1>')
})
app.use('/api/user',userRouter)
module.exports = app