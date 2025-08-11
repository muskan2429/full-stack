import { useState } from "react";
function TransferPage() {
    const [fromAccount, setFromAccount] = useState("123213ABC")
    const [toAccount, setToAccount] = useState("")
    const [amount, setAmount] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        alert(`You have successfully transfer the money to:\n${toAccount}\n and the amount is ${amount}`);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center py-10">
            <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-indigo-800 mb-6">
                    Transfer Money Between Account
                </h1>

                <label className="block text-gray-700 font-semibold mb-1">From Account</label>
                <input
                    type="text"
                    placeholder="Enter your account no."
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={fromAccount}
                    disabled
                    onChange={(e) => setFromAccount(e.target.value)}
                />

                <label className="block text-gray-700 font-semibold mb-1">To Account</label>
                <input
                    type="text"
                    placeholder="Enter your reciver account no."
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={toAccount}
                    onChange={(e) => setToAccount(e.target.value)}
                />

                <label className="block text-gray-700 font-semibold mb-1">Amount</label>
                <input
                    type="number"
                    placeholder="Enter amount you want to sent"
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
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

export { TransferPage }