import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations"; // імпортуємо дію для видалення
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          data={{ id, name, number }}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
