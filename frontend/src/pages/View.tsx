import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Parseurls } from "../components/Parseurls";
import { check } from "../check"
import { useEffect, useState } from "react"
import { Head } from "../components/Head";
export const View = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const userid = params.get('userid');
    const [user, setUser] = useState<string>("");
    const [obj, setObj] = useState<any>();
    const id = params.get('id');
    useEffect(() => {
        check().then(async (result) => {
            if (!result.bool) {

                navigate('/signin');
            }
            setUser(result.userid);
        })
    }, []);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/url/get/${id}`, {
            headers: {
                "authorization": localStorage.getItem('token')
            }
        }).then((result) => {
            setObj(result.data.result);
        })
    }, []);
    const del = async () => {
        try {
            let ans = confirm("This is permanent change cant revert back, Are you sure ?");
            if (ans) {
                let result = await axios.delete(`http://localhost:3000/api/v1/url/delete/${id}`, {
                    headers: {
                        "authorization": localStorage.getItem('token')
                    }
                });
                if (result.data) {
                    alert("deleted successfully");
                    navigate('/home');
                }
            }
        }
        catch (err) {
            alert("cant delete");
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
            {(user == userid) ? (<div>
                <div className="mx-4">
                    <Parseurls id={obj?.id} userid={obj?.userid} active={obj?.active} url={obj?.url} on={obj?.on} />
                </div>
                <div className="flex justify-center">
                    <div onClick={del} className="py-1 px-8 cursor-pointer bg-red-500 text-center text-white hover:bg-red-900 rounded mx-4"><p>Delete</p></div>
                </div>
            </div>) : (<div className="flex justify-center items-center">
                <p className="text-stale-500">un-Authorised</p>
            </div>)}
        </div>
    )
}