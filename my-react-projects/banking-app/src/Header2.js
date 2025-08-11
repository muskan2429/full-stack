import { Link } from "react-router-dom";
function Header2() {
    return (
        <div className="flex justify-center gap-4 my-6">
            <Link to="/">
            <button className="px-6 py-2 bg-blue-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
                Home
            </button>
            </Link>

            <Link to="/bank detail">
            <button className="px-6 py-2 bg-blue-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
                Bank Detail
            </button>
            </Link>

            <Link to="/transfer">
            <button className="px-6 py-2 bg-blue-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
                Transfer
            </button>
            </Link>

            <Link to="/transaction">
            <button className="px-6 py-2 bg-blue-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
                Transaction
            </button>
            </Link>

            <Link to="/logout">
            <button className="px-6 py-2 bg-blue-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
                Logout
            </button>
            </Link>
        </div>

    )
}
export { Header2 }