const Contact = ()=>{
    return (
        <div className="flex p-4 m-4 flex-col items-center text-center">
            <h1 className="font-bold text-3xl">Contact Us Page</h1>
            <form className="flex flex-col w-3/12  p-4 m-4">
                <input  type="text" placeholder="Enter Name" className="rounded-lg border border-black p-4 m-4"></input>
                <input  type="text" placeholder="Email" className="rounded-lg border border-black p-4 m-4"></input>
                <button className="rounded-lg bg-black text-white">Connect With Me</button>
            </form>
        </div>
    )
}

export default Contact;