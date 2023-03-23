interface IButtonStyle {
  text: string;
  backgroundcolor: string;
}

function Buttonstyle({ text, backgroundcolor }: IButtonStyle): JSX.Element {
  const buttonstyle = `border-2 rounded-full uppercase h-10 w-40 ${backgroundcolor} text-white sm:w-32 hover:bg-yellow-500`;
  return <button className={buttonstyle}>{text}</button>;
}

export default Buttonstyle;
