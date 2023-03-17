import Ellipse from "../assets/Ellipsefilled";
import Ellipsefilled from "../assets/Ellipse";

function Testimonials() {
  return (
    <div
      className="bg-testimonials pl-12 py-16 pr-6 text-gray-300 bg-black font-poppins bg-50 bg-left-top sm:bg-55 sm:bg-right sm:px-44 sm:bg-no-repeat"
      id="testimonials"
    >
      <div className="">
        <p className="font-crimsontext text-base">1000+ HAPPY CLIENTS</p>
        <p className="font-crimsontext text-2xl text-yellow-500 sm:pb-8">
          TESTIMONIALS
        </p>
        <p className="text-xs pb-8 leading-loose sm:w-1/2">
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.”
        </p>
        <p className="">John Doe, CEO Microsoft</p>
        <p className="pb-8">July 17, 2018</p>
        <div className="flex flex-row">
          <Ellipse width="12px" height="12px" />
          <Ellipsefilled width="12px" height="12px" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
