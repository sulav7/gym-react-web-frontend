import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layout/defaultLayout";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/aboutPage";

import { Login } from "./pages/login/login";
import { Register } from "./pages/login/register";
import { NotFound } from "./pages/notfound/notFound";

import { Details } from "./pages/details/details";
import { Package } from "./pages/pricing/package";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/packages" element={<Package />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
