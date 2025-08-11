function LogoutPage(){
    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center py-10">
            <form className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center text-indigo-800 mb-6">Logout Your Bank Account</h1>
            <button
                    type="submit"
                    className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                    Confirm
                </button>
                </form>
        </div>
    )
}

export {LogoutPage}