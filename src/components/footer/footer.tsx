import {
  Email,
  Facebook,
  FacebookRounded,
  Instagram,
  LocationCity,
  Phone,
  Twitter,
} from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between flex-wrap">
        <div>
          <h1>GymMandu</h1>
          <p className="box-border w-[520px] text-gray-400 leading-7 max-md:w-[250px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            magni illum asperiores doloremque beatae. Necessitatibus repellendus
            ab voluptatum reiciendis doloribus facere earum dicta minima amet.
            Vel at ex iste quasi.
          </p>

          <FacebookRounded className="mr-3 bg-primary rounded-[50%] p-3 cursor-pointer hover:bg-black" />
          <Twitter className="mr-3 bg-primary rounded-[50%] p-3 cursor-pointer hover:bg-black" />
          <Instagram className="mr-3 bg-primary rounded-[50%] p-3 cursor-pointer hover:bg-black" />
        </div>
        <div className="flex flex-col">
          <h1>Contact Us</h1>
          <span className="mb-5">
            {" "}
            <Phone className="align-middle mr-3" />
            9863439373
          </span>
          <span className="mb-5">
            <Email className="align-middle mr-3" />
            Sulavniroula78@gmail.com
          </span>
          <span className="mb-5">
            <LocationCity className="align-middle mr-3" />
            Baneshwor,Kathmandu
          </span>
          <span className="mb-5">
            <LocationCity className="align-middle mr-3" />
            Baneshwor,Kathmandu
          </span>
        </div>
        <div className="flex flex-col">
          <h1>Useful Links</h1>
          <NavLink to="/home" className="no-underline ">
            <p className="text-white ">Home</p>
          </NavLink>
          <NavLink to="/about" className="no-underline ">
            <p className="text-white ">About Us</p>
          </NavLink>
          <NavLink to="/packages" className="no-underline ">
            <p className="text-white ">Packages</p>
          </NavLink>
        </div>
      </div>
      <div className="text-center  mb-4 md:mb-0">
        <p className="text-sm">© 2023 Sulav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
