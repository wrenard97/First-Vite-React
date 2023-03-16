import bgtest from "../images/background-1.png";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="12px"
            viewBox="0 0 24 24"
            width="12px"
            fill="#d9a520"
          >
            <path d="M24 24H0V0h24v24z" fill="none" />
            <circle cx="12" cy="12" r="8" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="12px"
            viewBox="0 0 24 24"
            width="12px"
            fill="#d9a520"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="12px"
            viewBox="0 0 24 24"
            width="12px"
            fill="#d9a520"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
