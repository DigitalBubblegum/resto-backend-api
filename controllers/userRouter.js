const userRouter = require('express').Router()
const businessData = require('../data/businessData')

userRouter.get('/business',(_req,res) => {
  res.status(200).json(businessData.businessData)
})

userRouter.get('/business/:id',(req,res)=>{
  const id = Number(req.params.id)
  const business =  businessData.businessData.find( i => Number(i.id) === id)
  if(business){
    res.status(200).json(business)
  }else{
    res.status(400).end()
  }
})

userRouter.get('/reviews',(_req,res)=>{
  let reviews = []
  businessData.businessData.map((business)=>{
    reviews.push({
      id: business.id,
      reviews: business.reviews,
    })
  })
  res.status(200).json(reviews)
})

userRouter.delete('/reviews/:id',(req,res)=>{
  const id = Number(req.params.id)
  const remove = Number(req.body.review_id)
  const business = businessData.businessData.find(i => Number(i.id)===id)
  const reviews = business.reviews.filter(i=>Number(i.user_id)!==remove)
  business.reviews = reviews
  businessData.businessData = businessData.businessData.filter(business => Number(business.id) !== id)
  businessData.businessData = [...businessData.businessData,business]
  res.sendStatus(204)
})

module.exports = userRouter