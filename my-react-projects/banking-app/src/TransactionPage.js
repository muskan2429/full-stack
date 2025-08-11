function TransactionPage(){
    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full">
                <h1 className="text-2xl font-bold text-indigo-800 text-center mb-6">
                    Your Bank Transactions
                </h1>

                <table className="w-full text-left table-auto border border-gray-200">
                    <tbody>
                        <tr className="border-b border-gray-200">
                            <th className="py-2 px-4 text-gray-700 font-semibold">S.no.</th>
                            <th className="py-2 px-4 text-gray-700 font-semibold">Date</th>
                            <th className="py-2 px-4 text-gray-700 font-semibold">Amount</th>
                            <th className="py-2 px-4 text-gray-700 font-semibold">Transfer Type</th>
                            <th className="py-2 px-4 text-gray-700 font-semibold">Account Type</th>
                            <th className="py-2 px-4 text-gray-700 font-semibold">Account No.</th>
                            <th className="py-2 px-4 text-gray-700 font-semibold">Transaction ID</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export {TransactionPage}