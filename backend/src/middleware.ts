import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';
const jwtpass=process.env.jwtpass as string;
export const middleWare=async (req:any,res:Response,next:NextFunction)=>{
        const token=req.headers.authorization as string;
        try{
                const result:any= jwt.verify(token,jwtpass);
                req.userid=result.id;
                next();
        }
        catch(err)
        {
            console.log("the error is: ");
            console.log(err);
            res.status(401).json({error:"error"});
        }

}