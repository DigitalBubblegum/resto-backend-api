const businessRouter = require('express').Router()
const businessData = require('../data/businessData')
businessRouter.get('/',async (_req,res) => {
    res.status(200).json(businessData.businessData)
})
businessRouter.get('/:id',async(req,res)=>{
  const id = req.params.id;
  const business = await businessData.businessData.find( i => i.id === id)
  res.status(200).json(business);
})

module.exports = businessRouter