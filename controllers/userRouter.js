const userRouter = require('express').Router()
const businessData = require('../data/businessData')

userRouter.get('/business/',(_req,res) => {
  res.status(200).json(businessData.businessData)
})

userRouter.get('/business/:id',(req,res)=>{
  const id = Number(req.params.id)
  const business =  businessData.businessData.find( i => Number(i.id) === id)
  console.log(business)
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
  // console.log(reviews)
  res.status(200).json(reviews)
})

module.exports = userRouter