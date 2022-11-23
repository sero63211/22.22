import Image from "next/image";
import { useState } from "react";

const info = {
  fontFamily: "Permanent Marker",
  fontSize: 14,
};

//This is the component that holds a link such as the twitter link we have below the profile view
const To = (props) => {
  const [mouseIsOver, setMouseIsOver] = useState("white");
  let handler = (value) => setMouseIsOver(value);

  const wrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 40,
    borderRadius: "15px",
    background: mouseIsOver,
  };

  return (
    <a
      target={"_blank"}
      onMouseOver={() => handler("white")}
      onMouseLeave={() => handler("white")}
      href={props.goto}
      style={wrapper}
    >
      <Image
        src={props.source}
        alt={props.alternative}
        width={props.width}
        height={props.height}
      />
      <p style={info}>{props.title}</p>
    </a>
  );
};

export default To;
