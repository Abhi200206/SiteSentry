import { useNavigate } from "react-router-dom";
import { check } from "../check";
import { useEffect, useState } from "react";
import axios from "axios";
import { Logo } from "../components/Logo";
import { Loading } from "../components/Loading";

export const Profile = () => {
    const navigate = useNavigate();
    const [val, setVal] = useState<any>();

    useEffect(() => {
        check().then(async (result) => {
            if (!result.bool) {
                navigate('/signin');
            }
        });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:3000/api/v1/user/getdetails", {
                    headers: {
                        "authorization": localStorage.getItem('token')
                    }
                });
                setVal(result.data.result);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    if (!val) {
        return <div><Loading /></div>;
    }

    return (
        <div>
            <div className="text-center mb-8">
                <Logo />
                <h1 className="text-3xl font-bold mt-4">Welcome to SiteSentry , {val.firstName} </h1>
            </div>
            <div className="flex justify-center items-center ">
                <div className="border-[1px] p-4 rounded">
                    <div className="flex gap-1">
                        <p>id: </p>
                        <p>{val.id}</p>
                    </div>
                    <div className="flex gap-1">
                        <p>Name: </p>
                        <p>{val.firstName + " " + val.lastName} </p>
                    </div>
                    <div className="flex gap-1">
                        <p>email: </p>
                        <p>{val.email} </p>
                    </div>
                </div>
            </div>
            <div onClick={()=>navigate('/home')} className="cursor-pointer text-center mt-8">
                    <div className="inline-block bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700">
                        Go to Home
                    </div>
                </div>
        </div>
    );
};
