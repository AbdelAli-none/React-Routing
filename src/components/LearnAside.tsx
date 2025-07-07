import { NavLink } from "react-router";

const LearnAside = () => {
  return (
    <aside className="mb-4">
      <nav className="w-55">
        <ul className="flex flex-col">
          <li className="hover:text-[#58c4dc] font-[400] py-1.5 px-4 rounded-md hover:bg-[#283541] duration-200">
            <NavLink to="/learn" end>
              Quick Start
            </NavLink>
          </li>
          <li className="hover:text-[#58c4dc] font-[400] py-1.5 px-4 rounded-md hover:bg-[#283541] duration-200">
            <NavLink to="/learn/thinking-in-react">Thinkking in React</NavLink>
          </li>
          <li className="hover:text-[#58c4dc] font-[400] py-1.5 px-4 rounded-md hover:bg-[#283541] duration-200">
            <NavLink to="/learn/installation">installation</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LearnAside;
