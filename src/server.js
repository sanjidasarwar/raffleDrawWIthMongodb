require('dotenv').config();
const express = require('express');
const morgan= require('morgan');
const cors = require('cors');
const mongoose= require('mongoose');
mongoose.set('strictQuery', false);

const app =express();

app.use([morgan('dev'), cors(), express.json()])

app.get('/health', (req, res, next)=>{
    res.status(200).json({status:'ok'})
})

const port = process.env.PORT || 3000

mongoose
.connect('mongodb://127.0.0.1:27017/rowffle-draw')
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is listining on port ${port}` );
    })
})
.catch(e=>{
    console.log(e);
})