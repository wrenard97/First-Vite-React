import Itype from './../interface/Type';

const handleClick = (
    index: number,
    setSelected: React.Dispatch<React.SetStateAction<Itype[]>>
    ) => {
    setSelected((prev: Itype[]) => [
      ...prev.map((elem, i) => {
        if (i === index) {
          return {
            ...elem,
            isActive: !elem.isActive,
          };
        } 
          return {
            ...elem,
            isActive: false,
        }
      }),
    ]);
  }

  export {handleClick}