import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import { isAuthenticated } from "../utils/token.utils";
import { Login } from "../pages/login/login";

export function DefaultLayout() {
  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <>
      <div className="flex flex-col min-h-[100vh]">
        <div className="flex-1">
          <Navbar />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
