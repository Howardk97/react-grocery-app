const LoginForm = () => {
    return(
        <div>
            <h1 className="text-3xl text-white">Grocery List App</h1>
            <form>
                <div>
                    <input className="p-2 rounded-2xl" placeholder="Enter your Email..." />
                </div>
                <div>
                    <input className="p-2 rounded-2xl" placeholder="Enter your Password..."/>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;