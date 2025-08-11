import { useState } from "react";
function CreateAccountPage() {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [branch, setBranch] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        alert(`You have successfully create you rbank account:\n your name is:${name}\n your branch is:${branch} \n your name is:${password}`);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center py-10">
            <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-indigo-800 mb-6">
                    Create Your Bank Account
                </h1>

                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="block text-gray-700 font-semibold mb-1">Mobile Number</label>
                <input
                    type="number"
                    placeholder="Enter your mobile no."
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />

                <label className="block text-gray-700 font-semibold mb-1">Select Branch</label>
                <select
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                >
                    <option value="">-- Select your bank branch --</option>
                    <option value="Panipat">Panipat</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                </select>


                <label className="block text-gray-700 font-semibold mb-1">Password</label>
                <input
                    type="password"
                    placeholder="Enter unique password"
                    className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>

    )
}
export { CreateAccountPage }