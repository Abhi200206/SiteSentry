import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { signupParse,signinParse,urlParse } from "../zod/zodValidation";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { Userdetails,signinType } from "../types/userDetails";
export const userRouter = express.Router();
const jwtpass:any=process.env.jwtpass;
userRouter.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName }: Userdetails = req.body;
    try {
        const result = await signupParse({ email, password, firstName, lastName });
        if (result.success) {
            const hashpass = await bcrypt.hash(password, 8);
            const val = await prisma.user.create({
                data: {
                    email,
                    password: hashpass,
                    firstName,
                    lastName,
                    
                },
                select:{
                    email:true,
                    firstName:true,
                    lastName:true,
                    id:true
                }
            });
            const token= jwt.sign({email,id:val.id},jwtpass);
            return  res.status(200).json({result:true,token});
        }
         return res.status(200).json({
            result: result.success
        });
    }
    catch (err) {
        console.log("the error is: ");
        console.log(err);
        res.status(500).json({ error: "error" });
    }
});

userRouter.post('/signin',async(req,res)=>{
    const {email,password}:signinType=req.body;
    try{
            const result=await signinParse(req.body);
            if(result.success)
            {
                const val=await prisma.user.findFirst({
                    where:{
                        email
                    },
                    select:{
                        email:true,
                        firstName:true,
                        lastName:true,
                        password:true,
                        id:true
                    }
                });
                if(val)
                {
                    const ans:boolean=await bcrypt.compare(password,val.password);
                    const token= jwt.sign({email,id:val.id},jwtpass);
                    return res.status(200).json({result:ans,token});
                }
                return res.status(402).json({val});
            }
             return res.status(401).json({
                result: result.success
            });
    }
    catch(err)
    {
        console.log("the error is: ");
        console.log(err);
        res.status(500).json({ error: "error" });
    }
});
