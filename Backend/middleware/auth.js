import jwt from 'jsonwebtoken';

export const authMiddleware=async(req,res,next)=>{
    const {token}=req.headers;

    if(!token){
        return res.json({success:false,message:"Unauthorized user"})
    }

    try{

        const decode_token=await jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId=decode_token.id;
        next();

    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"});

    }
}