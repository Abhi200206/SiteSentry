import { useNavigate } from "react-router-dom";
import { Head } from "../components/Head";
import axios from "axios";
import { useState } from "react";
import { check } from "../check";
import { useEffect } from "react";
export const Create = () => {
    const navigate = useNavigate();
    const [url, setUrl] = useState<string>("");
    useEffect(() => {
        check().then(async (result) => {
            if (!result.bool) {
                
                navigate('/signin');
            }
        })
    }, []);
    const send = async () => {
        try {
            let result = await axios.post("http://localhost:3000/api/v1/url/add", {
                url
            },
                {
                    headers: {
                        "authorization": localStorage.getItem('token') || ''
                    }
                });
            if (result.data) {
                alert("created successfully");
                navigate('/home');
            }
        }
        catch (err) {
            console.log(err);
            alert("cant create ");
        }
    }
    return (
        <div>
            <div className="sticky top-0 bg-gradient-to-br from-purple-500 via-orange-200 py-2 to-pink-500 mb-8">

                <div className="flex justify-between mx-4">
                    <div onClick={() => {
                        localStorage.removeItem('token');
                        navigate('/signin');
                    }} className="cursor-pointer rounded bg-red-500 text-white p-1 hover:bg-red-900 px-2">
                        <p>logout</p>
                    </div>
                    <Head />
                    <div onClick={() => {
                        navigate('/home');
                    }} className="cursor-pointer rounded bg-black text-white p-1 hover:bg-slate-500 px-2">
                        <p>back</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="border-[1px] p-4  rounded ">
                    <p className="text-sm my-1 font-bold">URL:</p>
                    <input onChange={(e) => setUrl(e.target.value)} className="w-full p-1 md:w-[600px] border-[1px] border-black rounded my-2" type="text" placeholder="enter url" />
                    <div onClick={send} className="text-white cursor-pointer text-center bg-green-500 rounded my-2 p-1 hover:bg-green-700"><p>create</p></div>
                </div>
            </div>
        </div>
    )
}