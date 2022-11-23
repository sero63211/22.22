import { useState } from "react";
import styling from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const Buttons = {
  cursor: "pointer",
};
const HoverButtons = {
  background: "white",
  cursor: "pointer",
  color: "black",
  opacity: 0.5,
};
const Titles = {
  fontFamily: "Permanent Marker",
  paddingLeft: 10,
  paddingRight: 10,
};

export const styles = {
  buttons: Buttons,
  hover: HoverButtons,
  titles: Titles,
};

let Mode = (props) => {
  let [over, setOver] = useState(false);
  let [lookbook, setLookbook] = useState(false);
  let [shop, setShop] = useState(false);
  //useRouter can give you the current pathname to make sure the correct mode is blinking
  const router = useRouter();
  const currentRoute = router.pathname.slice(1, router.pathname.length);

  //Code run only once the component is rendered to make sure we're on the correct mode (just for styling purposes)
  /*  useEffect(() => {
    props.handleCurrent(currentRoute);
    if (props.title === "Lookbook") {
      setLookbook(true);
    } else if (props.title === "Shop") {
      setShop(true);
    }
    if (currentRoute === "") {
      props.handleCurrent("Lookbook");
    }
  }, []);*/

  return (
    <Link
      href={shop ? "/shop" : lookbook ? "/lookbook" : "/" + props.title}
      style={
        over || props.current === props.title ? styles.hover : styles.buttons
      }
      className={styling.buttons}
      onMouseOver={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      onClick={() => props.handleCurrent(props.title)}
    >
      <h2 style={styles.titles}>{props.title}</h2>
    </Link>
  );
};
export default Mode;
