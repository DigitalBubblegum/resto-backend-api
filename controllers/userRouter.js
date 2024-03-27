const userData = require('../data/userData')

const userRouter = require('express').Router()

userRouter.get('/',async (_req,res) => {
  res.json(userData)
})

module.exports = userRouter