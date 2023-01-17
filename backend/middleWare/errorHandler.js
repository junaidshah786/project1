const createError= require("http-errors")

class errorHandler{

    static pathNotFound(req,res,next){
       const err= createError.NotFound()
        res.status(err.status||500)
        res.send({
            error:{
                status: err.status||500,
                message:err.message
            }
        })
    }
}

module.exports=errorHandler;