import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../../src/redux/auth/operations";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(register(values));
      navigate("/next-page"); // Замість '/next-page' вкажіть реальний шлях
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Username
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Password
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
