import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="bg-gradient-to-r from-black to-gray-900 text-white px-10 py-4 flex justify-between items-center shadow-md">

      {/* LOGO */}

      <h1 className="text-xl font-semibold">
        CityPulse 360
      </h1>


      {/* NAV LINKS */}

      <div className="space-x-8 text-sm">

        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>


        {/* ✅ FEATURES LINK */}

        <a href="#features" className="hover:text-gray-300">
          Features
        </a>


        <Link to="/dashboard" className="hover:text-gray-300">
          Live Dashboard
        </Link>


        <Link to="/about" className="hover:text-gray-300">
          About
        </Link>


      </div>

    </nav>

  );

}

export default Navbar;