// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { register } from '../../redux/auth/authOperations';

// const RegisterPage = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(register({ name, email, password }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//       </label>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </label>
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegisterPage;

import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={styles.form}>
        <RegisterForm />
    </div>
  );
}