const businessRouter = require('express').Router()
const businessData = require('../data/businessData')

const generateId = () => {
  const maxId = businessData.businessData.length > 0
    ? Math.max(...businessData.businessData.map(n => n.id))
    : 0
  return maxId + 1
}

businessRouter.get('/',async (_req,res) => {
  res.status(200).json(businessData.businessData)
})

businessRouter.get('/:id',(req,res)=>{
  const id = req.params.id
  const business =  businessData.businessData.find( i => i.id === id)
  if(business){
    res.status(200).json(business)
  }else{
    res.status(400).end()
  }
})

businessRouter.post('/',(req,res)=>{
  const body = req.body
  console.log(body)
  if (!body.nameOfBusiness ||!body.phone ||!body.city ||!body.address || !body.images) {
    return res.status(400).json({
      error: 'content missing',
    })
  }
  const business = {
    nameOfBusiness: body.nameOfBusiness,
    phone: body.phone,
    city: body.city,
    address: body.address,
    images: body.images,
    id: generateId()
  }
  businessData.businessData = businessData.businessData.concat(business)
  res.json(business)
})

businessRouter.put('/:id',(req,res) =>{
  const body = req.body
  const business = {
    'id':Number(req.params.id),
    'nameOfBusiness':body.nameOfBusiness,
    'phone':body.phone,
    'city':body.city,
    'address':body.address,
    'images': body.images,
    'reviews': body.reviews
  }
  businessData.businessData = businessData.businessData.filter(business => Number(business.id) !== Number(req.params.id))
  businessData.businessData = [...businessData.businessData,business]
  res.sendStatus(202)
})

module.exports = businessRouter