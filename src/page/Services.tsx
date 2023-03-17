import serviceOne from "../images/service-1.png";
import serviceTwo from "../images/service-2.png";
import serviceThree from "../images/service-3.png";
import CardServices from "./components/CardServices";
import Titlehead from "./components/Titlehead";

function Services() {
  return (
    <div
      className="flex flex-col justify-items-center items-center bg-gray-200 pt-24 pb-28 px-12 text-center font-poppins text-gray-600 text-xs sm:px-48"
      id="services"
    >
      <div>
        <Titlehead title="NOTHING BUT THE BEST" subtitle="OUR SERVICES" />
      </div>

      <div className="flex flex-col gap-8 sm:flex sm:flex-row sm:justify-items-center sm:gap-12">
        <CardServices
          url={serviceOne}
          title="CLASSIC HAIRCUT"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <CardServices
          url={serviceTwo}
          title="CLIPPER CUT"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <CardServices
          url={serviceThree}
          title="RAZOR SHAVER"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
}

export default Services;
