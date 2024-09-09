import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { useEffect } from "react";
import { selectAuthIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const RestrictedRoute = lazy(() =>
  import("./components/RestrictedRoute/RestrictedRoute")
);
function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  if (isRefreshing) return <p>User is refreshing, please wait...</p>;
  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            ></Route>
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            ></Route>
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            ></Route>
          </Routes>
        </Suspense>
      </Layout>
      <div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
