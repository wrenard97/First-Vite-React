import teamOne from "../images/team-img1.png";
import teamTwo from "../images/team-img2.png";
import teamThree from "../images/team-img3.png";

function OurTeam() {
  return (
    <div
      className="bg-gray-200 pt-24 pb-28 px-12 text-center font-poppins text-gray-600 text-sm sm:px-44"
      id="our-team"
    >
      <div>
        <p className="font-crimsontext text-lg">PROFESSIONAL</p>
        <p className="font-crimsontext text-4xl text-yellow-500 pb-4">
          OUR TEAM
        </p>
      </div>

      <div className="flex flex-col gap-8 justify-items-center items-center sm:flex sm:flex-row sm:justify-items-center sm:gap-12">
        
        <div className="hover:shadow-2xl py-0 sm:pb-0">
          <img src={teamOne} alt="" className="sm:h-96 sm:w-80 h-96 w-80" />
          <div className="">
            <p className="text-lg font-bold text-black pt-6">PAUL NARCH</p>
            <p className="pb-6">BARBER</p>
          </div>
        </div>

        <div className="hover:shadow-2xl py-0 sm:pb-0">
          <img src={teamTwo} alt="" className="sm:h-96 sm:w-80 h-96 w-80" />
          <div className="">
            <p className="text-lg font-bold text-black pt-6">STEVEN JOSEPH</p>
            <p className="pb-6">BARBER</p>
          </div>
        </div>

        <div className="hover:shadow-2xl py-0 sm:pb-0">
          <img src={teamThree} alt="" className="sm:h-96 sm:w-80 h-96 w-80" />
          <div className="">
            <p className="text-lg font-bold text-black pt-6">ALEXANDER DAVID</p>
            <p className="pb-6">SHAVER</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default OurTeam;
