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

exports.sellBulkTickets =(req, res) =>{
    /* 
        Here, the map() function iterates over the documents array in the request body and returns a new array with the same number of elements. For each element in the original array, the map() function creates a new object literal with the username and price fields set to the values from the corresponding element in the original array. The parentheses around the object literal are used to ensure that the JavaScript interpreter treats the object literal as a single expression, rather than a block of code.
    */
    const documents = req.body.map(doc => ({
        username: doc.username,
        price: doc.price
      }));
    Ticket.insertMany(documents)
            .then(ticket=>{
                res.json({
                    message: 'Tickets are created successfully',
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