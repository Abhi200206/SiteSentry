import zod, { string } from "zod";
import { Userdetails,signinType } from "../types/userDetails";
const userSchema=zod.object({
    email:zod.string().email("not an email"),
    password:zod.string().min(8,"password incorrect"),
    firstName:zod.string(),
    lastName:zod.string()
});
const signinSchema=zod.object({
    email:zod.string().email("not an email"),
    password:zod.string().min(8,"password incorrect")
})
export const signupParse=async (obj:Userdetails)=>{
    const result=await userSchema.safeParse(obj);
    return result;
}
export const signinParse=async(obj:signinType)=>{
    const result=await signinSchema.safeParse(obj);
    return result;
}