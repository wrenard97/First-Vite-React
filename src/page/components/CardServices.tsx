import Buttonstyle from "./Buttonstyle";

interface ICardServices {
  url: string;
  title: string;
  content: string;
}

function CardServices({ url, title, content }: ICardServices): JSX.Element {
  return (
    <div className="pb-6 hover:shadow-2xl flex flex-col items-center">
      <img src={url} alt="" className="sm:h-52 sm:w-72 h-64 w-72" />
      <div className="w-72">
        <h3 className="text-lg font-bold text-black pt-6 pb-3">{title}</h3>
        <p className="pb-4 px-8 tracking-wider sm:px-6">{content}</p>
        <Buttonstyle text="Read More" backgroundcolor="bg-yellow-500" />
      </div>
    </div>
  );
}

export default CardServices;
