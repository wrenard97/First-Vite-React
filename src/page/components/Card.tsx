import Buttonstyle from "./Buttonstyle";
import Itype from "./../../interface/Type";
import { useState } from "react";

interface ICard {
  data: Array<Itype>;
}

function Card({ data }: ICard): JSX.Element {
  const [selected, setSelected] = useState(data);

  function handleClick(index: number) {
    setSelected((prev: Itype[]) => [
      ...prev.map((elem, i) => {
        if (i === index) {
          return {
            ...elem,
            isActive: !elem.isActive,
          };
        } else {
          return {
            ...elem,
            isActive: false,
          };
        }
      }),
    ]);
  }

  return (
    <div className="flex flex-col gap-8 justify-items-center items-center sm:flex sm:flex-row sm:justify-items-center sm:gap-12">
      {selected.map((datas: Itype, index: number) => {
        return (
          <div
            className={`pb-6 flex flex-col items-center ${
              datas.isActive
                ? "text-yellow-500 bg-gray-500 shadow-2xl border-2 border-black"
                : "border-2 border-transparent border-solid"
            }`}
            onClick={() => handleClick(index)}
          >
            <img
              src={datas.url}
              alt=""
              className={datas.content ? "h-96 w-72" : "h-56 w-72"}
            />
            <div className="w-72">
              <h3
                className={`text-lg font-bold pt-6 pb-3 ${
                  datas.isActive ? "text-yellow-500" : null
                }`}
              >
                {datas.name}
              </h3>
              {datas.content ? (
                <p>{datas.content}</p>
              ) : (
                <div>
                  <p className="pb-4 px-8 tracking-wider sm:px-6">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Buttonstyle
                    text="Read More"
                    backgroundcolor={`bg-black ${
                      datas.isActive ? "bg-yellow-500" : ""
                    }`}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
