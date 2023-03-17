interface ICard {
  url: string;
  title: string;
  content: string;
}

function Card({ url, title, content }: ICard): JSX.Element {
  return (
    <div className="hover:shadow-2xl py-0 sm:pb-0">
      <img src={url} alt="" className="sm:h-96 sm:w-80 h-96 w-80" />
      <div className="">
        <p className="text-lg font-bold text-black pt-6">{title}</p>
        <p className="pb-6">{content}</p>
      </div>
    </div>
  );
}

export default Card;
