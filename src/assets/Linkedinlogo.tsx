interface ILinkedinlogo {
  width: string;
  height: string;
}

function Linkedinlogo({ width, height }: ILinkedinlogo): JSX.Element {
  return (
    <div>
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13 13"
        width={width}
        height={height}
      >
        <defs>
          <image
            width={width}
            height={height}
            id="img6"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAAAXNSR0IB2cksfwAAAJZQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgvnIzMwAAADJ0Uk5TSq5pAP8kvNwRBn6OjUmqpi950sdl7GDL6Gv3ZIdX1PVEuvRsTsDybela3ZC2pLU3iKyYJqq0AAAAbUlEQVR4nE3MWQ6CUBQE0atdiOCsqCgqDjg/p/1vjgQCWH8n6bRZq606A7xGHfxuIwX6W4a9vgbD0XgynUWyOSikbGFLYq1gnWzAr7SVdqSV9tKBY6ETZNKZS6FrrVv5eZceYE/3UubeH+nrfjnoOwgRaxO+NwAAAABJRU5ErkJggg=="
          />
        </defs>
        <style></style>
        <use href="#img6" x="0" y="0" />
      </svg>
    </div>
  );
}

export default Linkedinlogo;
