const adminRouter = require('express').Router()
let data = [
  {
    name: 'test3',
    information: 'information3',
  },
]
adminRouter.get('/',async (_req,res) => {
  res.json(data)
})

module.exports = adminRouter