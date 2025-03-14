// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../../redux/auth/authOperations";

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login({ email, password }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

import { useDispatch } from 'react-redux';
import { login } from '../../../src/redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .email('Must be a valid email')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(13, 'Too Long!')
      .required('Required'),
  });

  const onSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.name}`);
        navigate('/contacts', { replace: true });
      })
      .catch(() => {
        toast.error('Invalid data');
      });
    actions.resetForm();
  };

  return (
    <div className="container">
      <div className={css.block}>
        <h2 className={css.logTitle}>Login</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form className={css.form}>
            <label className={css.label}>
              Email
              <Field type="email" name="email" className={css.input} />
            </label>
            <label className={css.label}>
              Password
              <Field type="password" name="password" className={css.input} />
            </label>
            <button type="submit" className={css.buttonForm}>
              Login
            </button>
          </Form>
        </Formik>
        <p className={css.link}>
          Don’t have an account? <br />
          <Link to="/register" className={css.linkreg}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
