import { NavLink } from "react-router";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="max-w-lg mx-auto mt-7 mb-20">
      <ul className="flex items-center justify-between text-nowrap">
        <li className="hover:text-[#58c4dc] font-[500] py-1.5 px-4 rounded-2xl hover:bg-[#283541] duration-200">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-[#58c4dc] font-[500] py-1.5 px-4 rounded-2xl hover:bg-[#283541] duration-200">
          <NavLink to="/contacts">Contact</NavLink>
        </li>
        <li className="hover:text-[#58c4dc] font-[500] py-1.5 px-4 rounded-2xl hover:bg-[#283541] duration-200">
          <NavLink to="/learn">Learn</NavLink>
        </li>
        <li className="hover:text-[#58c4dc] font-[500] py-1.5 px-4 rounded-2xl hover:bg-[#283541] duration-200">
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className="hover:text-[#58c4dc] font-[500] py-1.5 px-4 rounded-2xl hover:bg-[#283541] duration-200">
          <NavLink to="/contribute">Contribute</NavLink>
        </li>
        <li className="hover:text-[#58c4dc] font-[500] py-1.5 px-4 rounded-2xl hover:bg-[#283541] duration-200">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
