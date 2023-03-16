import serviceOne from "../images/service-1.png";
import serviceTwo from "../images/service-2.png";
import serviceThree from "../images/service-3.png";
import Buttonstyle from "./components/Buttonstyle";

function Services() {
  return (
    <div
      className="bg-gray-200 pt-24 pb-28 px-12 text-center font-poppins text-gray-600 text-xs sm:px-48"
      id="services"
    >
      <div>
        <p className="font-crimsontext text-lg">NOTHING BUT THE BEST</p>
        <p className="font-crimsontext text-4xl text-yellow-500 pb-8">
          OUR SERVICES
        </p>
      </div>

      <div className="flex flex-col gap-8 justify-items-center items-center sm:flex sm:flex-row sm:justify-items-center sm:gap-12">
        <div className="pb-6 hover:shadow-2xl">
          <img src={serviceOne} alt="" className="sm:h-52 sm:w-96 h-64 w-80" />
          <h3 className="text-lg font-bold text-black pt-6 pb-3">
            CLASSIC HAIRCUT
          </h3>
          <p className="pb-4 px-8 tracking-wider sm:px-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Buttonstyle text="Read More" backgroundcolor="bg-yellow-500" />
        </div>

        <div className="pb-6 hover:shadow-2xl">
          <img src={serviceTwo} alt="" className="sm:h-52 sm:w-96 h-64 w-80" />
          <h3 className="text-lg font-bold text-black pt-6 pb-3">
            CLIPPER CUT
          </h3>
          <p className="pb-4 px-8 tracking-wider sm:px-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Buttonstyle text="Read More" backgroundcolor="bg-yellow-500" />
        </div>

        <div className="pb-6 hover:shadow-2xl">
          <img
            src={serviceThree}
            alt=""
            className="sm:h-52 sm:w-96 h-64 w-80"
          />
          <h3 className="text-lg font-bold text-black pt-6 pb-3">
            RAZOR SHAVER
          </h3>
          <p className="pb-4 px-8 tracking-wider sm:px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Buttonstyle text="Read More" backgroundcolor="bg-yellow-500" />
        </div>
      </div>
    </div>
  );
}

export default Services;
