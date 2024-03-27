const businessRouter = require('express').Router()
let data = [
  {
    name: "test2",
    information: "information2",
  },
];
businessRouter.get('/',async (_req,res) => {
    res.json(data)
})

module.exports = businessRouter