import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/auth";
import { Button } from "@mui/material";
import { isAuthenticated } from "../../utils/token.utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { logout, userData } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    logout?.();
    navigation("/login");
  };
  // const navigateToMemebershipPage = () => {
  //   if (isAuthenticated()) {
  //     navigation("/become-a-member");
  //   } else {
  //     navigation("/login");
  //   }
  // };

  return (
    <nav
      id="sidebar"
      className={`bg-none ${
        isScrolled ? "fixed top-0 z-50 w-full bg-green-200 " : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col"
          >
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-black font-bold text-lg">
                  Gym
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4 ">
                  <NavLink to="/home" className="no-underline">
                    <p className="text-black no-underline  hover:text-red-600 transition:3s ease-out px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </p>
                  </NavLink>
                  <NavLink to="/about" className="no-underline">
                    <motion.p className="text-black no-underline hover:text-red-600 transition:3s ease-out px-3 py-2 rounded-md text-sm font-medium">
                      About Us
                    </motion.p>
                  </NavLink>
                  <NavLink className="no-underline" to="/packages">
                    <p className="text-black no-underline hover:text-red-600 transition:3s ease-out px-3 py-2 rounded-md text-sm font-medium">
                      Package
                    </p>
                  </NavLink>

                  <NavLink
                    to={`/details/${userData?.id}`}
                    className="no-underline"
                  >
                    {isAuthenticated() && (
                      <p className="text-black cursor-pointer no-underline hover:text-red-600 transition:3s ease-out px-3 py-2 rounded-md text-sm font-medium">
                        Your Details
                      </p>
                    )}
                  </NavLink>

                  {!isAuthenticated() && (
                    <Button
                      variant="outlined"
                      onClick={() => navigation("/login")}
                    >
                      LogIn
                    </Button>
                  )}

                  {isAuthenticated() ? (
                    <button
                      onClick={logOut}
                      className="outline-none border-none bg-[#326191] h-10 text-[14px] text-white rounded-sm w-40 cursor-pointer hover:bg-black"
                    >
                      Logout
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden ">
                <button
                  onClick={toggleNavbar}
                  type="button"
                  className="text-white bg-black  inline-flex items-center justify-center p-2 rounded-md  border-none"
                >
                  <svg
                    className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={`md:hidden  ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          <NavLink to="/home" className="no-underline">
            <p className="text-black hover:text-red-600 transition:3s ease-out block px-3 py-2 rounded-md text-base font-medium">
              Home
            </p>
          </NavLink>
          <NavLink to="/about" className="no-underline">
            <p className="text-black hover:text-red-600 transition:3s ease-out block px-3 py-2 rounded-md text-base font-medium">
              About
            </p>
          </NavLink>
          <NavLink className="no-underline" to="/packages">
            <p className="text-black hover:text-red-600 transition:3s ease-out block px-3 py-2 rounded-md text-base font-medium">
              Package
            </p>
          </NavLink>

          <NavLink to={`/details/${userData?.id}`} className="no-underline">
            {isAuthenticated() && (
              <p className="text-black hover:text-red-600 transition:3s ease-out block px-3 py-2 rounded-md text-base font-medium">
                Your Details
              </p>
            )}
          </NavLink>

          {!isAuthenticated() && (
            <Button variant="outlined" onClick={() => navigation("/login")}>
              LogIn
            </Button>
          )}

          {isAuthenticated() && (
            <button
              onClick={logOut}
              className="outline-none border-none bg-[#00785a] h-10 text-white rounded-sm w-40 cursor-pointer hover:bg-black"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
