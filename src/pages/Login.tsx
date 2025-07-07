import { useLocation } from "react-router";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

const Login = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2 className="text-center mb-3">Login to Contribute</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default Login;
