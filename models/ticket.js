const mongoose =require('mongoose')
const Schema =mongoose.Schema

const ticketSchema = new Schema({
    username :{
        type:String,
        trim:true,
        require:true,
    },
    price :{
        type:Number,
        trim:true,
        require:true,
    }
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports= Ticket;