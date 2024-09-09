import clsx from "clsx";
import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";
const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <ul className={css.authList}>
      <li>
        <NavLink to="/register" className={buildLinkClass}>
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={buildLinkClass}>
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
