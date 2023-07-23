const notfoundpage = (req,res,next) =>{
    const err=  new Error(`Not Found : ${req.originalUrl}`);
    res.status(404);
    next(err);

};

const errorHandler = (err, req, res, next) => {
    const statuscode = res.statusCode  ? res.statusCode : 500;
    res.status(statuscode);
    switch(statuscode)
    {
        case 401:
            res.json({
                title:"unautherised",
                message: err?.message,
                
              });
             break ;
        case 404:
            res.json({
                title:"not found",
                message: err?.message,
                
              });
             break ;
         case 500:
                res.json({
                    title:"Server error",
                    message: err?.message,
                    
                  });
          break ;
         default:
            break;

    }
   
  };
  
module.exports = { errorHandler, notfoundpage};