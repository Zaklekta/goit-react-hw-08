import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.navContainer}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
