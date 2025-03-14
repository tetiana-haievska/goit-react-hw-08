import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { selectContacts, selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <div>
        <h2>Contacts</h2>
        <ContactForm />
        {loading && !error && <Loader />}
        {!loading && !error && contacts.length === 0 && (
          <h2 className={styles.noContacts}>You have no contacts!</h2>
        )}
        <SearchBox />
        <ContactList />
      </div>
    </main>
  );
};

export default ContactsPage;
