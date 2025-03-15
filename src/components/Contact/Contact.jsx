// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/operations';
// import styles from './Contact.module.css';

// const Contact = ({ id, name, number }) => {
//   const dispatch = useDispatch();

//   return (
//     <li className={styles.item}>
//       <p className={styles.text}>{name}: {number}</p>
//       <button onClick={() => dispatch(deleteContact(id))} className={styles.button}>
//         Delete
//       </button>
//     </li>
//   );
// };

// Contact.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

// export default Contact;

import { FaUser, FaPhoneAlt, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import c from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, edit, handleDelete }) => {
  return (
    <ul className={c.contactItem}>
      <li className={c.item}>
        <FaUser className={c.icon} />
        {name}
      </li>
      <li className={c.item}>
        <FaPhoneAlt className={c.icon} />
        {number}
      </li>
      <li className={c.item}>
        <button className={c.btnDelete} onClick={edit}>
          <FaPen className={c.iconDelete} />
          Edit
        </button>
        <button className={c.btnDelete} onClick={() => handleDelete(id)}>
          <MdDelete className={c.iconDelete} />
          Delete
        </button>
      </li>
    </ul>
  );
};

export default Contact;