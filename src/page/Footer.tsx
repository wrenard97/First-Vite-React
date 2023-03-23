import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Facebooklogo from "../assets/Facebooklogo";
import Linkedinlogo from "../assets/Linkedinlogo";
import Map from "../components/Map";
import Twitterlogo from "../assets/Twitterlogo";

function Footer() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col">
          <Map />

          <div className="bg-black text-white font-poppins text-center pt-16 pb-10 sm:px-44 sm:justify-center">
            <p className="text-yellow-500 font-crimsontext text-5xl pb-4">
              BARBERS
            </p>
            <ul className="">
              <div className="text-xs sm:flex sm:flex-row sm:justify-center sm:gap-4">
                <div className="flex flex-row justify-between gap-4 px-7 sm:px-0">
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
                </div>
                <li className="hover:text-yellow-500">
                  <HashLink smooth to="#contact-us">
                    Contact Us
                  </HashLink>
                </li>
              </div>
            </ul>

            <div className="flex flex-row justify-center gap-6 items-center py-6">
              <Facebooklogo width="7" height="13" />
              <Twitterlogo width="13" height="10" />
              <Linkedinlogo width="13" height="13" />
            </div>

            <p className="text-xs">Barbers &copy; 2018. All Rights Reserved.</p>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Footer;
