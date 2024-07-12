export const Head = ({ email }: { email?: string }) => {
    return (
        <div >
            <div className=" ">
                <p className="text-xl font-black px-2 text-white "> SiteSentry</p>
                {email ? <p className="">{email}</p> : ""}
            </div>
        </div>
    )
}