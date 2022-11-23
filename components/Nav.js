import Mode from "./Mode";
import { useState } from "react";
import style from "../styles/Nav.module.css";
const Nav = () => {
  const [current, setCurrent] = useState("");
  const handleCurrent = (value) => setCurrent(value);
  let buttonTitles = ["New In", "About 22.22studios", "Lookbook", "Shop"];

  let navigation = buttonTitles.map((currentButton) => {
    return (
      <Mode
        current={current}
        handleCurrent={handleCurrent}
        title={currentButton}
        key={currentButton}
      />
    );
  });
  return <div>{navigation}</div>;
};

export default Nav;
