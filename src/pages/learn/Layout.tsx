import Navbar from "../../components/Navbar";
import LearnAside from "../../components/LearnAside";
import { Outlet } from "react-router";

const LearnLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex align-start space-x-4">
        <LearnAside />
        <Outlet />
      </div>
    </div>
  );
};

export default LearnLayout;
