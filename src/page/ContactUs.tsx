import Location from "./components/Location";
import Phone from "./components/Phone";
import Mail from "./components/Mail";
import Buttonstyle from "./components/Buttonstyle";
function ContactUs() {
  return (
    <div
      className="text-center py-20 font-poppins text-gray-700 sm:px-44"
      id="contact-us"
    >
      <p className="font-crimsontext text-xl">CONTACT US</p>
      <p className="font-crimsontext text-3xl text-yellow-500 pb-10">
        MAKE AN APPOINTMENT
      </p>
      <div className="sm:flex sm:flex-row">
        <div className="px-12 sm:w-1/2">
          <p className="text-left pb-10 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="flex flex-col justify-between sm:flex sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-4 pb-10 text-xs">
              <p className="font-bold pb-2">Contact Information:</p>

              <div className="flex items-center gap-4">
                <Location />
                <p>123 Your Address here</p>
              </div>

              <div className="flex items-center gap-4">
                <Phone />
                <p>(046) 123 - 456</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail />
                <p>youremail@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 pb-10 text-xs sm:justify-between">
              <p className="font-bold pb-2">Working Hours:</p>
              <div className="flex justify-between sm:gap-4">
                <p>Monday to Friday</p>
                <p>9 AM - 6 PM</p>
              </div>
              <div className="flex justify-between">
                <p>Saturday</p>
                <p>9 AM - 5 PM</p>
              </div>
              <div className="flex justify-between">
                <p>Sunday</p>
                <p>9 AM - 12 NN</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-12 sm:px-0 sm:w-1/2">
          <p className="pb-8 text-left text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua..
          </p>
          <form className="flex flex-col gap-2 text-xs">
            <div className="flex flex-row gap-1 h-8 justify-between">
              <input
                type="text"
                className="w-2/4 pl-2 border-2 border-gray-300"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-2/4 pl-2 border-2 border-gray-300"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                className="h-8 pl-2 border-2 border-gray-300"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="pb-20 pt-4 pl-2 border-2 border-gray-300"
                type="text"
                placeholder="Message"
              />
            </div>
            <div className="self-end">
              <Buttonstyle text="Submit" backgroundcolor="bg-yellow-500" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
