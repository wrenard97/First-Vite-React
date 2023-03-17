interface IMail {
  width: string;
  height: string;
}

function Mail({ width, height }: IMail): JSX.Element {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 8"
      width={width}
      height={height}
    >
      <defs>
        <image
          width={width}
          height={height}
          id="img3"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAMAAAD6Ou7DAAAAAXNSR0IB2cksfwAAAJBQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgHEPCYQAAADB0Uk5TPuj/8epBnWfs72iauzG6vbjyzEenqUbKpgCgoaL9iHfYVlPXeYX+lXt8k2CC+/heN2zqSgAAAF1JREFUeJwlzNkaQlAAReFtnQaRctAgGVJKit7/7XzxX62rJTmYCYulVmuXycbzxTbY/XsfhMgSxQkcjiesDJzTS5ZewSinKKtbfX80PMWrnQfvDn2+9HYYbE/zGwHBPgWZ3/pIFAAAAABJRU5ErkJggg=="
        />
      </defs>
      <style></style>
      <use href="#img3" x="0" y="0" />
    </svg>
  );
}

export default Mail;
