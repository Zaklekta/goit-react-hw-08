import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectLoader,
} from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoader);
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1 className={css.pageHeader}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error !== null && <ErrorMessage />}
      {loading && <Loader />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className={css.text}>
          You don&apos;t have any contacts yet. Create your first contact{" "}
        </p>
      )}
    </>
  );
};

export default ContactsPage;
