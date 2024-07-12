export interface Userdetails{
    email:string,
    password:string,
    firstName:string,
    lastName:string
}
export interface signinType{
    email:string,
    password:string
}
export interface urlType{
    userid:string,
    url:string
}
export interface urlArr{
    id:string,
    userid:string,
    url:string,
    active:boolean,
    on:boolean
}