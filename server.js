require('dotenv').config();
const mongoose = require('mongoose')


const http = require('http');


const app =require('./app/app');

const server = http.createServer(app)



const PORT = process.env.PORT || 8000

mongoose
.connect('mongodb://127.0.0.1:27017/rowffle-draw')
.then(()=>{
    server.listen(PORT, ()=>{
        console.log(`Application running on port ${PORT}`);
    })
})
.catch(e=>{
    console.log(e);
})
