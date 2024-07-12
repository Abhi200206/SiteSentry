import { useNavigate } from "react-router-dom"

export const Parseurls = ({ id, userid, url, active }: url) => {
    let navigate=useNavigate();
    return (
        <div onClick={()=>navigate(`/view?id=${id}&&userid=${userid}`)} className="cursor-pointer rounded border-[1px] p-2 my-4 px-6">
            <div>
                <div className="md:flex md:justify-between my-2">
                    <div className="flex gap-1 items-center">
                        <p className="text-sm font-bold">id: </p>
                        <p className="text-slate-500 text-sm">{id}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <p className="text-sm font-bold">Status: </p>
                        <p className={active ? "text-green-500" : "text-red-500"}>{active ? "Active" : "Not-Active"} </p>
                    </div>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <div><p className="text-sm font-bold">URL: </p></div>
                    <div>
                        <p className="text-sm font-semibold text-slate-700">{url} </p>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <div>{active ? <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    }</div>
                    <div>
                        <p className="text-sm font-semibold ">{active?"The url is up and running":"!!! The url is down please check" }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export interface url {
    id: string,
    userid: string,
    url: string,
    active: boolean,
    on: boolean
}

