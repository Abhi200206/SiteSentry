import express from "express";
import { PrismaClient } from '@prisma/client';
import { urlType } from "../types/userDetails";
import { urlParse } from "../zod/zodValidation";
import { middleWare } from "../middleware";
import { userRouter } from "./userRoute";


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
urlRouter.post('/change',middleWare ,async(req:any,res)=>{
    const {active}:{active:boolean,id:string}=req.body;
    const id=req.query.id;
    console.log(id);
    const userid:string=req.userid;

    try{

        let result=await prisma.urls.update({
            where:{
                id
            },
            data:{
                active
            }
        });
        return res.status(200).json({result});

    }
    catch(err)
    {
        console.log("the error is: ");
        console.log(err);
        res.status(500).json({ error: "error" });
    }

});
urlRouter.get('/urls',middleWare ,async(req:any,res)=>{
    try{
        const userid=req.id;
        const result=await prisma.urls.findMany({
            where:{
                userid
            }
        });
        res.status(200).json({result});
    }
    catch(err)
    {
        console.log("the error is: ");
        console.log(err);
        res.status(500).json({ error: "error" });
    }

});
