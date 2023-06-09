import about_image from "../images/1.png";
import Buttonstyle from "./components/Buttonstyle";
import Titlehead from "./components/Titlehead";

function AboutUs() {
  return (
    <div
      className="px-12 py-28 sm:px-48 sm:py-20 sm:flex sm:flex-row sm:justify-center"
      id="about"
    >
      <div className="sm:flex sm:flex-row sm:justify-center sm:gap-10">
        <div className="font-poppins text-gray-500 flex flex-col text-xs sm:w-1/2">
          <Titlehead
            title="THE UNIQUE STORY"
            subtitle="50 YEARS OF EXPERIENCE"
          />
          <p className="pb-6 sm:w-96">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="pb-6 sm:w-96">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium.
          </p>
          <Buttonstyle text="Read More" backgroundcolor="bg-yellow-500" />
        </div>
        <div className="py-10 sm:w-1/2">
          <img src={about_image} alt="" className="sm:h-72 sm:w-80" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
