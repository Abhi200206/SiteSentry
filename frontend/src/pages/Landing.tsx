import { useNavigate } from "react-router-dom"
import { Logo } from "../components/Logo"
import { check } from "../check"
import { useEffect } from "react"
export const Landing = () => {
    const navigate = useNavigate();
    useEffect(() => {
        check().then(async (result) => {
            if (result.bool) {

                navigate('/home');
            }
        })
    }, []);
    return (
        <div>
            <div className="text-center mb-8">
                <Logo />
                <h1 className="text-3xl font-bold mt-4">Welcome to SiteSentry </h1>
            </div>
            <div className="flex justify-center my-8">
                <div className="flex gap-4">
                    <div className="rounded bg-black text-white text-center  py-1 px-4 cursor-pointer" onClick={() => navigate('/signin')}><p>signin</p></div>
                    <div className="rounded bg-black text-white text-center  py-1 px-4 cursor-pointer" onClick={() => navigate('/signup')}>Signup</div>
                </div>
            </div>
            <div className="flex justify-center my-8">
            <div className="flex gap-1 ml-6">
                <p className="text-slate-700">Need help or get started  </p>
                <p onClick={() => navigate('/help')} className="text-blue-500 underline cursor-pointer">here</p>
            </div>
            </div>
        </div>
    )
}