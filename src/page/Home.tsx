import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Burger from "../assets/Burger";
import Mail from "../assets/Mail";
import Phone from "../assets/Phone";
import Buttonstyle from "./components/Buttonstyle";

function Home() {
  return (
    <BrowserRouter>
      <div className="bg-home bg-top bg-no-repeat bg-black pb-36 sm:pb-54 sm:bg-100">
        <div className="flex flex-row justify-between text-yellow-500 px-8 py-5 text-xs font-poppins font-thin sm:px-48">
          <div className="flex flex-row gap-2 items-center">
            <Mail width="12" height="8" />
            <a href="mailto:youremail@gmail.com">youremail@gmail.com</a>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Phone width="9" height="13" />
            <a href="tel:+046123467"> (046) 123 - 4567</a>
          </div>
        </div>

        <div className="bg-white/5 flex flex-row justify-between px-12 py-4 font-crimsontext sm:px-48 items-center">
          <p className="text-4xl text-yellow-500">BARBERS</p>
          <div className="sm:hidden ">
            <button className="cursor-pointer">
              <Burger width="40px" color="#ffffff" height="40px" />
            </button>
          </div>

          <ul className="hidden sm:flex flex-row text-white gap-4 font-poppins text-xs ">
            <li className="hover:text-yellow-500">
              <HashLink smooth to="#">
                Home
              </HashLink>
            </li>
            <li className="hover:text-yellow-500 ">
              <HashLink smooth to="#about">
                About Us
              </HashLink>
            </li>
            <li className="hover:text-yellow-500">
              <HashLink smooth to="#services">
                Services
              </HashLink>
            </li>
            <li className="hover:text-yellow-500">
              <HashLink smooth to="#testimonials">
                Testimonials
              </HashLink>
            </li>
            <li className="hover:text-yellow-500">
              <HashLink smooth to="#our-team">
                Our Team
              </HashLink>
            </li>
            <li className="hover:text-yellow-500">
              <HashLink smooth to="#contact-us">
                Contact Us
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="text-yellow-500 pt-60 pb-32 px-12 sm:px-48">
          <h1 className="font-crimsontext text-white text-4xl py-4 sm:flex flex-row gap-2 sm:text-5xl">
            Quality Barber <span className="block">Shop</span>
          </h1>
          <p className="text-xs text-white w-72 sm:w-96">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="flex flex-col gap-2 pt-6 text-white sm:flex sm:flex-row sm:text-sm">
            <Buttonstyle text="Learn More" backgroundcolor="bg-transparent" />
            <Buttonstyle text="Contact Us" backgroundcolor="bg-transparent" />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Home;
