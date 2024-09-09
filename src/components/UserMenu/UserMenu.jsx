import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenuWrap}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button className={css.logOutBtn} type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
