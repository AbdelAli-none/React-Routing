import { BrowserRouter } from "react-router";
import router from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>{router}</BrowserRouter>
    </>
  );
}

export default App;
