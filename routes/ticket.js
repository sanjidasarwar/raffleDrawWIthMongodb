const router =require('express').Router()

const {
    sellSingleTicket
} = require('../controller/ticket')


router.route('/').post(sellSingleTicket)

router.route('/').get((req, res)=>{
    res.json({
        message: 'hello'
    })
})

module.exports = router