import teamOne from "../images/team-img1.png";
import teamTwo from "../images/team-img2.png";
import teamThree from "../images/team-img3.png";
import Card from "./components/Card";
import Titlehead from "./components/Titlehead";
import { Selection } from "./components/Selection";

function OurTeam() {
  const { selectedCardIndex, handleCardClick } = Selection();
  return (
    <div
      className="flex flex-col justify-items-center items-center bg-gray-200 pt-24 pb-28 px-12 text-center font-poppins text-gray-600 text-sm sm:px-44"
      id="our-team"
    >
      <div>
        <Titlehead title="PROFESSIONAL" subtitle="OUR TEAM" />
      </div>

      <div className="flex flex-col gap-8 justify-items-center items-center sm:flex sm:flex-row sm:justify-items-center sm:gap-12">
        {[
          [teamOne, "PAUL NARCH", "BARBER"],
          [teamTwo, "STEVEN JOSEPH", "BARBER"],
          [teamThree, "ALEXANDER DAVID", "SHAVER"],
        ].map(([url, name, content], index) => (
          <Card
            url={url}
            name={name}
            content={content}
            key={index}
            size="h-96 w-72"
            isSelected={selectedCardIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
