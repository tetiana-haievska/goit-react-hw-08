import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      {isLoading && <p>Loading...</p>}
      <ContactList />
    </div>
  );
};

export default Contacts;
