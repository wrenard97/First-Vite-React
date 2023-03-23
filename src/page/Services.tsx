import serviceOne from "../images/service-1.png";
import serviceTwo from "../images/service-2.png";
import serviceThree from "../images/service-3.png";
import Card from "./components/Card";
import Titlehead from "./components/Titlehead";
import { Selection } from "./components/Selection";

function Services() {
  const { selectedCardIndex, handleCardClick } = Selection();
  return (
    <div
      className="flex flex-col justify-items-center items-center bg-gray-200 pt-24 pb-28 px-12 text-center font-poppins text-gray-600 text-xs sm:px-48"
      id="services"
    >
      <div>
        <Titlehead title="NOTHING BUT THE BEST" subtitle="OUR SERVICES" />
      </div>

      <Card
        data={[
          { id: 1, url: serviceOne, name: "CLASSIC HAIRCUT", isActive: false },
          { id: 2, url: serviceTwo, name: "CLIPPER CUT", isActive: false },
          { id: 3, url: serviceThree, name: "RAZOR SHAVER", isActive: false },
        ]}
      />
    </div>
  );
}

export default Services;
