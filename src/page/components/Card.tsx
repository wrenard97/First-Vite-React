import Buttonstyle from "./Buttonstyle";

interface ICard {
  url: string;
  title: string;
  content?: string;
  size: string;
}

function Card({ url, title, content, size }: ICard): JSX.Element {
  return (
    <div className="pb-6 hover:shadow-2xl flex flex-col items-center">
      <img src={url} alt="" className={size} />
      <div className="w-72">
        <h3 className="text-lg font-bold text-black pt-6 pb-3">{title}</h3>
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
