import { useEffect, useState } from "react";
import axios from "axios";
import { Parseurls } from "../components/Parseurls";
import { url } from "../components/Parseurls";
import { Head } from "../components/Head";
import { Loading } from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { check } from "../check";
export const Home = () => {
    const [urls, setUrls] = useState<url[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const navigate = useNavigate();
    useEffect(() => {
        check().then(async (result) => {
            if (!result.bool) {

                navigate('/signin');
            }
        })
    }, []);

    const fetchData = async () => {
        setLoad(true);
        try {
            const result = await axios.get("http://localhost:3000/api/v1/url/urls", {
                headers: {
                    "authorization": localStorage.getItem('token') || ''
                }
            });
            setUrls(result.data.result);
        } catch (err) {
            console.log(err);
        } finally {
            setLoad(false);
        }
    };
    useEffect(() => {


        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 180000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {load ? (
                <Loading />
            ) : (
                <div>
                    <div className="sticky top-0 bg-gradient-to-br from-purple-500 via-orange-200 py-2 to-pink-500">
                        <div className="flex justify-between mx-4">
                            <div className="flex gap-2">
                                <div onClick={() => {
                                    localStorage.removeItem('token');
                                    navigate('/signin');
                                }} className="cursor-pointer rounded bg-red-500 text-white p-1 hover:bg-red-900 px-2">
                                    <p>logout</p>
                                </div>
                                <div onClick={() => {
                                    navigate('/profile');
                                }} className="cursor-pointer rounded bg-black text-white p-1 hover:bg-slate-600 px-2">
                                    <p>profile</p>
                                </div>
                            </div>
                            <Head />
                            <div className="flex gap-2">
                                <div onClick={() => {
                                    navigate('/help');
                                }} className="cursor-pointer rounded bg-black text-white p-1 hover:bg-slate-700 px-2">
                                    <p>Help</p>
                                </div>
                                <div onClick={() => {
                                    navigate('/create');
                                }} className="cursor-pointer rounded bg-green-500 text-white p-1 hover:bg-green-900 px-2">
                                    <p>create</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-slate-400 text-sm mt-1">
                        <p>Note: status updates every 3 minutes.</p>
                    </div>
                    {urls.length === 0 ? (
                        <div className="flex justify-center items-center h-[300px] ">
                            <div>
                                <p className="text-2xl font-bold text-slate-400">Create one to start monitoring</p>
                            </div>
                        </div>
                    ) : (
                        <div className="m-6">
                            {urls.map((m: url) => (
                                <Parseurls key={m.id} id={m.id} url={m.url} userid={m.userid} active={m.active} on={m.on} />
                            ))}
                        </div>
                    )}
                    <div className="flex gap-1 ml-6">
                        <p className="text-slate-700">Need help or get started  </p>
                        <p onClick={() => navigate('/help')} className="text-blue-500 underline cursor-pointer">here</p>
                    </div>
                </div>
            )}
        </div>
    );
};
