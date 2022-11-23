import logo from "../public/logo.png";
import userLogo from "../public/user-icon.png";
import Image from "next/image";
import To from "../pageComponents/To";
import style from "../styles/Header.module.css";
const Header = () => {
  return (
    <header>
      <div className={style.header}>
        <div className={style.user}>
          <To
            source={userLogo}
            alt="Logo"
            width={30}
            height={30}
            goto={"/user"}
            option={false}
          />
        </div>
        <div className={style.logo}>
          <Image src={logo} alt="Logo" width={70} height={30} />
        </div>
      </div>
    </header>
  );
};
export default Header;
