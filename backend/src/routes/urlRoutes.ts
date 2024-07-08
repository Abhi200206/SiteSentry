import express from "express";
import { PrismaClient } from '@prisma/client';
import { urlType } from "../types/userDetails";
import { urlParse } from "../zod/zodValidation";
import { middleWare } from "../middleware";


const prisma = new PrismaClient();
export const urlRouter=express.Router();
urlRouter.post('/add',middleWare,async(req:any,res)=>{
    const {url}:urlType=req.body;
    const userid:string=req.userid;
    try{
        const result=await urlParse({userid,url});
        if(result.success)
        {
            const val=await prisma.urls.create({
                data:{
                    userid,
                    url
                }
            });
           return res.status(200).json({result:val});
        }
        return  res.status(200).json({
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
