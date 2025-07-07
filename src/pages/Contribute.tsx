import { useLocation } from "react-router";
import Button from "../components/UI/Button";
import Textarea from "../components/UI/Textarea";

const Contribute = () => {
  const { state } = useLocation();
  return (
    <div>
      <h2 className="text-center mb-3">Email: {state.email}</h2>
      <h2 className="text-center mb-3">Issue: Bug Report</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <Textarea />
        <Button>Sumbit new issue</Button>
      </form>
    </div>
  );
};

export default Contribute;
