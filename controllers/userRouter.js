const userRouter = require('express').Router()
let data = [
  {
    name: "test",
    information: "information",
  },
];
userRouter.get('/',async (_req,res) => {
    res.json(data)
})

module.exports = userRouter