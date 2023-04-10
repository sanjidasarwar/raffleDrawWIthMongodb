const express =require('express');

const app = express();

app.use(notFoundHandler)
app.use(errorHandler)



module.exports = app;