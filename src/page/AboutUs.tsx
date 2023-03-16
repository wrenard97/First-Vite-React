import about_image from "../images/1.png";
import Buttonstyle from "./components/Buttonstyle";

function AboutUs() {
  return (
    <div className="px-12 py-28 sm:px-48 sm:py-20" id="about">
      <div className="sm:flex sm:flex-row sm:gap-10">
        <div className="font-poppins text-gray-500 flex flex-col text-xs sm:w-1/2">
          <p className="font-crimsontext text-lg">THE UNIQUE STORY</p>
          <h2 className="text-yellow-500 font-crimsontext text-4xl pb-6">
            50 YEARS OF EXPERIENCE
          </h2>
          <p className="pb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="pb-6  ">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium.
          </p>
          <Buttonstyle text="Read More" backgroundcolor="bg-yellow-500" />
        </div>
        <div className="py-10 sm:w-1/2">
          <img src={about_image} alt="" className="sm:h-72 sm:w-full" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
