import "./App.css";

import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { useSelector, useDispatch } from "react-redux";
import { selectLoader } from "./redux/contactsSlice";
import { selectError } from "./redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const loader = useSelector(selectLoader);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className="pageHeader">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error !== null && <ErrorMessage />}
      {loader && <Loader />}
      <ContactList />
    </>
  );
}

export default App;
