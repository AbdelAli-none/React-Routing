import { Routes, Route } from "react-router";
import About from "../pages/About";
import Home from "../pages";
import Contacts from "../pages/Contacts";
import RootLayout from "../pages/RootLayout";
import QuickStartPage from "../pages/learn";
import LearnLayout from "../pages/learn/Layout";
import ThinkingInReact from "../pages/learn/ThinkingInReact";
import Installation from "../pages/learn/Installtion";
import Contribute from "../pages/Contribute";
import Login from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";

const isLoggedIn = true;
const userData: { email: string } | null = isLoggedIn
  ? { email: "email@gmail.com" }
  : null;

const router = (
  <Routes>
    {/* Root Layout  */}
    <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
      <Route index element={<Home />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="about" element={<About />} />
      <Route
        path="contribute"
        element={
          <ProtectedRoute
            isAllowed={isLoggedIn}
            redirectPath="/login"
            data={userData}
          >
            <Contribute />
          </ProtectedRoute>
        }
      />
      <Route
        path="login"
        element={
          <ProtectedRoute
            isAllowed={!isLoggedIn}
            redirectPath="/contribute"
            data={userData}
          >
            <Login />
          </ProtectedRoute>
        }
      />
    </Route>
    {/* Learn Layout  */}
    <Route path="/learn" element={<LearnLayout />}>
      <Route index element={<QuickStartPage />} />
      <Route path="thinking-in-react" element={<ThinkingInReact />} />
      <Route path="installation" element={<Installation />} />
    </Route>

    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default router;
