import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>
        <div className={css.sectionWrap}> {children}</div>
      </main>
    </>
  );
};

export default Layout;
