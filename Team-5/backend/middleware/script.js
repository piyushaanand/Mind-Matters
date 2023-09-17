const jwt=require('jsonwebtoken');
const Secret="AbCD";

const authenticate=(req,res,next)=>{
    const head=req.headers.authorization;
    if(head){
        const token=head.split(' ')[1];
        jwt.verify(token,Secret,(err,ms)=>{
            if(err){
                return res.sendStatus(403);
            }
            req.user=ms;
            next();
        })
    }else{
        res.sendStatus(401);
    }
}

module.exports={
    authenticate,
    Secret
}