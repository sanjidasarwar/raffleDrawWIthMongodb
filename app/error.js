const notFoundHandler =(_req, _res, next)=>{
    const error = new Error('Resources not found');
    error.status=400;
    next(error);
}

const errorHandler =(error,_req, res, _next)=>{
    if(error.status){
       return res.status(error.status).json({
        message: error.message
       })
    }
    return res.status(500).json({
        message: 'something went wrong'
       })
}

module.exports ={
    notFoundHandler,
    errorHandler
}