import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Map from "./components/Map"

function Footer() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col">

      <Map/>

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
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 7 13"
                width="7"
                height="13"
              >
                <defs>
                  <image
                    width="7"
                    height="13"
                    id="img4"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAANCAMAAABSF4SHAAAAAXNSR0IB2cksfwAAAGZQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgdCtPDAAAACJ0Uk5TAE/Q8faUD/+5M7hLLRlaZ7zWrqNMmb1/LAxjMnw2hi/ydlOv21MAAABHSURBVHicbck1AoAwAMXQoB8v7lLuf0nanSxvCBCEUZxAKlcGuVSUFdRSA5hW6npD6LcGxkmalxU2aXefQzr/vKTb+1j7wgea5wOH3hSuAAAAAABJRU5ErkJggg=="
                  />
                </defs>
                <style></style>
                <use href="#img4" x="0" y="0" />
              </svg>
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 13 10"
                width="13"
                height="10"
              >
                <defs>
                  <image
                    width="13"
                    height="10"
                    id="img5"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAKCAMAAABYMCT2AAAAAXNSR0IB2cksfwAAAIdQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUggdwpkAAAAC10Uk5TAAIVnjgXlS7K/80nA8uXJO5mz8aBJRr+hIePH7f8ThExUR6c6lRTodbjtG8OUOgZTAAAAGFJREFUeJwtiu0aQmAQRLe8YooKEer1HaL7vz67m/mxe84zQ3QgydEx+t2Tx9fH+SIWhLjSDcBdywiIEzY8UrbsiT25lMUu5Uu3bxXLZKq6+VvL1vVWefjojMZp/i7rT3ADFx4FhEky2DwAAAAASUVORK5CYII="
                  />
                </defs>
                <style></style>
                <use href="#img5" x="0" y="0" />
              </svg>
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 13 13"
                width="13"
                height="13"
              >
                <defs>
                  <image
                    width="13"
                    height="13"
                    id="img6"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAAAXNSR0IB2cksfwAAAJZQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgvnIzMwAAADJ0Uk5TSq5pAP8kvNwRBn6OjUmqpi950sdl7GDL6Gv3ZIdX1PVEuvRsTsDybela3ZC2pLU3iKyYJqq0AAAAbUlEQVR4nE3MWQ6CUBQE0atdiOCsqCgqDjg/p/1vjgQCWH8n6bRZq606A7xGHfxuIwX6W4a9vgbD0XgynUWyOSikbGFLYq1gnWzAr7SVdqSV9tKBY6ETZNKZS6FrrVv5eZceYE/3UubeH+nrfjnoOwgRaxO+NwAAAABJRU5ErkJggg=="
                  />
                </defs>
                <style></style>
                <use href="#img6" x="0" y="0" />
              </svg>
            </div>
            <p className="text-xs">Barbers &copy; 2018. All Rights Reserved.</p>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Footer;
