const express = require('express')
const Controller = require('vertex360/dist/vertex/Controller')
const router = express.Router()

router.get('/' , (req, res , next) => {

    res.render('home', req.context)

})

router.post("/order", async(req, res, next) => {
    const orderData = req.body
    const orderCtr = controllers.order.instance()
    const order = await orderCtr.post(orderData)
    
    res.json(order)

})

module.exports = router