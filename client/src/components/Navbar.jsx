import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="max-w-[85%] mx-auto flex items-center justify-between py-8">
      {/* left */}
      <div>
        <img className="w-56" src={logo} alt="logo" />
      </div>
      {/* mid */}
      <div className="hidden lg:flex ">
        <ul className="flex items-center justify-center gap-16 font-normal text-sm text-[#4A4A52]">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Shop</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Blog</NavLink>
          </li>
        </ul>
      </div>
      {/* right */}
      <div className="flex items-center justify-center gap-4">
        <span className="hidden lg:flex items-center justify-center gap-2  font-normal text-sm text-white">
          <FaHeart />
          Favorites
        </span>
        <div className="flex items-center justify-center gap-2 relative  font-normal text-sm text-white">
          <FaShoppingCart />
          <span className="absolute -top-2 left-2 w-4 h-4 rounded-full bg-[#EE4536] text-xs flex items-center justify-center ">
            3
          </span>
          Cart
        </div>
        <button className="py-3 px-6 text-sm font-semibold border border-white rounded-lg text-white ">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
