import teamOne from "../images/team-img1.png";
import teamTwo from "../images/team-img2.png";
import teamThree from "../images/team-img3.png";
import Card from "./components/Card";
import Titlehead from "./components/Titlehead";

function OurTeam() {
  return (
    <div
      className="flex flex-col justify-items-center items-center bg-gray-200 pt-24 pb-28 px-12 text-center font-poppins text-gray-600 text-sm sm:px-44"
      id="our-team"
    >
      <div>
        <Titlehead title="PROFESSIONAL" subtitle="OUR TEAM" />
      </div>

      <div className="flex flex-col gap-8 justify-items-center items-center sm:flex sm:flex-row sm:justify-items-center sm:gap-12">
        <Card
          url={teamOne}
          title="PAUL NARCH"
          content="BARBER"
          size="h-96 w-72"
        />
        <Card
          url={teamTwo}
          title="STEVEN JOSEPH"
          content="BARBER"
          size="h-96 w-72"
        />
        <Card
          url={teamThree}
          title="ALEXANDER DAVID"
          content="SHAVER"
          size="h-96 w-72"
        />
      </div>
    </div>
  );
}

export default OurTeam;
