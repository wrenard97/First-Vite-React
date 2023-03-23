import Buttonstyle from "./Buttonstyle";
import Itype from "./../interface/Type";

interface ICard {
  data: Itype;
  index: number;
  handleClick: Function;
}

const Card = ({ data, index, handleClick }: ICard) => {
  return (
    // <div className="flex flex-col gap-8 justify-items-center items-center sm:flex sm:flex-row sm:justify-items-center sm:gap-12">
    //   {selected.map((datas: Itype, index: number) => {
    //     return (
    <div
      className={`pb-6 flex flex-col items-center ${
        data.isActive
          ? "text-yellow-500 bg-gray-500 shadow-2xl border-2 border-black"
          : "border-2 border-transparent border-solid"
      }`}
      onClick={() => handleClick(index)}
    >
      <img
        src={data.url}
        alt=""
        className={data.content ? "h-96 w-72" : "h-56 w-72"}
      />
      <div className="w-72">
        <h3
          className={`text-lg font-bold pt-6 pb-3 ${
            data.isActive ? "text-yellow-500" : null
          }`}
        >
          {data.name}
        </h3>
        {data.content ? (
          <p>{data.content}</p>
        ) : (
          <div>
            <p className="pb-4 px-8 tracking-wider sm:px-6">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Buttonstyle
              text="Read More"
              backgroundcolor={`bg-black ${
                data.isActive ? "bg-yellow-500" : ""
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
