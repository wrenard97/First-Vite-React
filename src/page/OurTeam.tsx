import teamOne from "../images/team-img1.png";
import teamTwo from "../images/team-img2.png";
import teamThree from "../images/team-img3.png";
import Card from "./components/Card";
import Titlehead from "./components/Titlehead";
import { Selection } from "./components/Selection";

function OurTeam() {
  return (
    <div
      className="flex flex-col justify-items-center items-center bg-gray-200 pt-24 pb-28 px-12 text-center font-poppins text-gray-600 text-sm sm:px-44"
      id="our-team"
    >
      <div>
        <Titlehead title="PROFESSIONAL" subtitle="OUR TEAM" />
      </div>
      <Card
        data={[
          {
            id: 1,
            url: teamOne,
            name: "PAUL NARCH",
            content: "BARBER",
            isActive: false,
          },
          {
            id: 2,
            url: teamTwo,
            name: "STEVEN JOSEPH",
            content: "BARBER",
            isActive: false,
          },
          {
            id: 3,
            url: teamThree,
            name: "ALEXANDER DAVID",
            content: "SHAVER",
            isActive: false,
          },
        ]}
      />
    </div>
  );
}

export default OurTeam;
