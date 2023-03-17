interface IPhone {
  width: string;
  height: string;
}

function Phone({ width, height }: IPhone): JSX.Element {
  return (
    <div>
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 9 13"
        width={width}
        height={height}
      >
        <defs>
          <image
            width={width}
            height={height}
            id="img2"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAMAAABM3rQ0AAAAAXNSR0IB2cksfwAAAHhQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgttI+VgAAACh0Uk5TKdHplOfULZ7/jqG1sHaPd6yzwFQAS727bme4TLZtjKigoyzV89PXMOrHD5QAAABUSURBVHicjYvXDYAwEMUehHKhXELvPcD+G1LEAFiy5B8Dli2EcFwPPpGUkihAGMXMrHSCNMsfihJV/VbT/q7v7Ur0elCjGqYEMxHx7YJ1Mxvv5jgv3AQIs2sXcYYAAAAASUVORK5CYII="
          />
        </defs>
        <style></style>
        <use href="#img2" x="0" y="0" />
      </svg>
    </div>
  );
}

export default Phone;
