function BankDetailPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-indigo-800 text-center mb-6">
                    Your Account Detail
                </h1>

                <table className="w-full text-left table-auto border border-gray-200">
                    <tbody>
                        <tr className="border-b border-gray-200">
                            <th className="py-2 px-4 text-gray-700 font-semibold">Name</th>
                            <td className="py-2 px-4 text-gray-800">Shyam Dev</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <th className="py-2 px-4 text-gray-700 font-semibold">Number</th>
                            <td className="py-2 px-4 text-gray-800">982841XXX</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <th className="py-2 px-4 text-gray-700 font-semibold">Branch</th>
                            <td className="py-2 px-4 text-gray-800">HDFC Panipat</td>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 text-gray-700 font-semibold">Balance</th>
                            <td className="py-2 px-4 text-green-700 font-bold">₹100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export { BankDetailPage }