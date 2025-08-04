import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="border-2 border-gray-500 p-4 bg-blue-100 flex justify-between">

      {/* Home button (left side) */}
      <Link to="/home">
        <button className="border-2 border-gray-500 bg-blue-300 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Home
        </button>
      </Link>

      {/* Profile & Friend buttons (right side) */}
      <div className="flex gap-4">
        <Link to="/profile">
          <button className="bg-blue-300 border-2 border-gray-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Profile
          </button>
        </Link>
        <Link to="/friends">
          <button className="bg-blue-300 border-2 border-gray-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            My Friend
          </button>
        </Link>
      </div>
    </div>
  );
}

export { Header };
