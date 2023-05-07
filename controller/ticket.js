const Ticket=require('../models/Ticket')
exports.sellSingleTicket =(req, res) =>{
    const {username, price} = req.body
    const ticket = new Ticket(
                {username, 
                    price
                }
            )
    
    ticket.save()
        .then(ticket=>{
            res.json({
                message: 'Ticket created successfully',
                ticket
            })
        })
        .catch(e=>{
            console.log(e);
            res.status(500).json({
                error: 'error occure'
            })
        })
}