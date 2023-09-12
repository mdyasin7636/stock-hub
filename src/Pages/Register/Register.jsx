
const Register = () => {
    return (
        <div className="min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 p-14" >
            <div className="container mx-auto">
                <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div className="w-1/2 flex flex-col items-center justify-center text-center p-9 text-white" style={{backgroundImage: `url("https://i.ibb.co/92znDL2/loginImg.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  backgroundPosition: 'center' }}>
                        <h1 className="text-3xl mb-3 font-bold">Welcome to StockHub</h1>
                        <div>
                            <p className="font-thin">Join our inventory revolution and experience the future of product management. It&apos;s time to organize, optimize, and elevate your business. Start your StockHub journey today!</p>
                        </div>
                    </div>
                    <div className="w-1/2 py-16 px-12">
                        <h1 className="text-3xl mb-4 font-bold">Register</h1>
                        <p className="">Create your account. It&apos;s free and only takes a minute</p>
                        <form>
                            <div className="mt-3">
                                <input className="border rounded-md w-full border-gray-400 py-1 px-2" type="text" placeholder="Name"/>
                            </div>
                            <div className="mt-5">
                                <input className="border rounded-md w-full border-gray-400 py-1 px-2" type="email" name="" id="" placeholder="Email"/>
                            </div>
                            <div className="mt-5">
                                <input className="border rounded-md w-full border-gray-400 py-1 px-2" type="password" name="" id="" placeholder="Password"/>
                            </div>
                            <div className="mt-5">
                                <input className="border rounded-md w-full border-gray-400 py-1 px-2" type="password" name="" id="" placeholder="Confirm Password"/>
                            </div>
                            <div className="mt-5">
                                <button className="w-full py-3 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md text-white text-center font-semibold">Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;