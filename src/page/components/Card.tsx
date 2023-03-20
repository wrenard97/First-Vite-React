import Buttonstyle from "./Buttonstyle";

interface ICard {
  url: string;
  name: string;
  content?: string;
  size: string;
  isSelected: boolean;
  onClick: () => void;
}

function Card({
  url,
  name,
  content,
  size,
  isSelected,
  onClick,
}: ICard): JSX.Element {
  return (
    <div
      className={`pb-6 flex flex-col items-center ${
        isSelected
          ? "text-yellow-500 bg-gray-500 shadow-2xl border-2 border-black"
          : ""
      }`}
      onClick={onClick}
    >
      <img src={url} alt="" className={size} />
      <div className="w-72">
        <h3
          className={`text-lg font-bold pt-6 pb-3 ${
            isSelected ? "text-yellow-500" : null
          }`}
        >
          {name}
        </h3>
        {content ? (
          <p>{content}</p>
        ) : (
          <div>
            <p className="pb-4 px-8 tracking-wider sm:px-6">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Buttonstyle text="Read More" backgroundcolor="bg-yellow-500" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
