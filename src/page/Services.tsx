import serviceOne from "../images/service-1.png";
import serviceTwo from "../images/service-2.png";
import serviceThree from "../images/service-3.png";
import Card from "../components/Card";
import Titlehead from "../components/Titlehead";
import Itype from "./../interface/Type";
import { useState } from "react";
import { handleClick } from "../components/handleClick";

function Services() {
  const [selected, setSelected] = useState<Itype[]>([
    { id: 1, url: serviceOne, name: "CLASSIC HAIRCUT", isActive: false },
    { id: 2, url: serviceTwo, name: "CLIPPER CUT", isActive: false },
    { id: 3, url: serviceThree, name: "RAZOR SHAVER", isActive: false },
  ]);

  return (
    <div
      className="flex flex-col justify-items-center items-center bg-gray-200 pt-24 pb-28 px-12 text-center font-poppins text-gray-600 text-xs sm:px-48"
      id="services"
    >
      <div>
        <Titlehead title="NOTHING BUT THE BEST" subtitle="OUR SERVICES" />
      </div>
      <div className="flex flex-col gap-8 justify-items-center items-center sm:flex sm:flex-row sm:justify-items-center sm:gap-12">
        {selected.map((data: Itype, index: number) => {
          return (
            <Card
              key={index}
              data={data}
              index={index}
              handleClick={() => handleClick(index, setSelected)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
