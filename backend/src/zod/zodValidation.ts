import zod, { string } from "zod";
import { Userdetails,signinType ,urlType} from "../types/userDetails";
const userSchema=zod.object({
    email:zod.string().email("not an email"),
    password:zod.string().min(8,"password incorrect"),
    firstName:zod.string(),
    lastName:zod.string()
});
const signinSchema=zod.object({
    email:zod.string().email("not an email"),
    password:zod.string().min(8,"password incorrect")
});
 const urlSchema=zod.object({
    userid:zod.string(),
    url:zod.string()
});
export const urlParse=async(obj:urlType)=>
{
    const result=await urlSchema.safeParse(obj);
    return result;
}
export const signupParse=async (obj:Userdetails)=>{
    const result=await userSchema.safeParse(obj);
    return result;
}
export const signinParse=async(obj:signinType)=>{
    const result=await signinSchema.safeParse(obj);
    return result;
}