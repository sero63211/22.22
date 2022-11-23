import Nav from "./Nav";
import Meta from "./Meta";
import Header from "../pageComponents/Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div>
        <main>
          <Header />
          {children}
        </main>
        <Nav />
      </div>
    </>
  );
};

export default Layout;
