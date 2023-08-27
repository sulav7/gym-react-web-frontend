import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layout/defaultLayout";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/aboutPage";

import { Login } from "./pages/login/login";
import { Register } from "./pages/login/register";
import { NotFound } from "./pages/notfound/notFound";

import { Details } from "./pages/details/details";
import { Package } from "./pages/pricing/package";
import Courses from "./pages/courses/courses";
import { ForgotPassword } from "./pages/login/forgotPassword";
import { ResetPassword } from "./pages/login/resetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />

          <Route path="/packages" element={<Package />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Register />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/not-found" element={<NotFound />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetPassword/:resetToken" element={<ResetPassword />} />
      </Routes>
    </>
  );
}
export default App;
