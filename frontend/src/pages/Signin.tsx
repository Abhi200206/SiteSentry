import { Logo } from "../components/Logo"
import { Loading } from "../components/Loading"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { check } from "../check"
export const Signin = () => {
    const navigate = useNavigate();
    const [loading, SetLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    useEffect(() => {
        check().then(async (result) => {
            if (result.bool) {
                navigate(`/home`);
            }
        })
    }, []);
    const submit = async () => {
        SetLoading(true);   
        try{
            let result=await axios.post(`http://localhost:3000/api/v1/user/signin`,{
                email,
                password
            });
            if(result.data)
            {
                localStorage.setItem('token',result.data.token);
                alert("Signin successfull!");
                navigate('/home');

            }
        }
        catch(err)
        {
            SetLoading(false);
            alert("incorrect input types or invalid data provided");
            setPassword("");
        }
    }
    return (
        <div className="md:h-screen">
            <div className="md:grid h-full md:grid-cols-12">
                <div className="col-span-6 flex justify-center items-center">
                    <div className="border-[1px] p-2 rounded ">
                        <p className="text-center my-2 text-2xl font-bold">Signin</p>
                        <Aster value="Email" />
                        <input onChange={(e) => setEmail(e.target.value)} className="w-full p-1 border-[1px] border-black rounded my-1" type="text" placeholder="enter email" />
                        <Aster value="Password" />
                        <input onChange={(e) => setPassword(e.target.value)} className="w-full p-1 border-[1px] border-black rounded  my-1" type="password" placeholder="enter email" />
                        <div onClick={submit} className="rounded bg-black text-white text-center p-1 cursor-pointer my-2 hover:bg-slate-500">
                            {loading ? <Loading /> : <p>signin</p>}
                        </div>
                        <div className="flex gap-1"><p className="text-slate-700">Don't have an account?</p> <p onClick={() => navigate('/signup')} className="underline cursor-pointer">Signup</p></div>

                    </div>
                </div>
                <div className="md:col-span-6 mt-4 md:mt-0">
                    <Logo />
                </div>

            </div>
        </div>
    )
}

function Aster({ value }: { value: string }) {
    return (
        <div className="flex">
            <div> <p className="text-sm my-1">{value}: </p></div>
            <div><p className="text-red-500">*</p> </div>
        </div>
    )
}