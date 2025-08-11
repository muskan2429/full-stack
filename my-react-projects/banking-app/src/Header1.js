import { Link } from "react-router-dom";
function Header1() {
    return (
        <div className="flex justify-center gap-4 my-4">
            <Link to="/">
            <button className="px-6 py-2 bg-blue-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
                Home
            </button>
            </Link>

            <Link to="/create account">
            <button className="px-6 py-2 bg-blue-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
                Create Account
            </button>
            </Link>

            <Link to="/login">
            <button className="px-6 py-2 bg-blue-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
                Login
            </button>
            </Link>
        </div>

    )
}
export { Header1 }