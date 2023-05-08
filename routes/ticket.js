const router =require('express').Router()

const {
    sellSingleTicket,
    sellBulkTickets
} = require('../controller/ticket')


router.route('/').post(sellSingleTicket)

router.route('/').get((req, res)=>{
    res.json({
        message: 'hello'
    })
})

router.post('/bulk', sellBulkTickets)  

module.exports = router