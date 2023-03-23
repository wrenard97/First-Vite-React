interface ITitlehead {
  title: string;
  subtitle: string;
}

function Titlehead({ title, subtitle }: ITitlehead): JSX.Element {
  return (
    <>
      <p className="font-crimsontext text-lg">{title}</p>
      <p className="text-yellow-500 font-crimsontext text-4xl pb-6">
        {subtitle}
      </p>
    </>
  );
}

export default Titlehead;
