import { useDispatch } from "react-redux";
import { login } from "../../../src/redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password cannot be longer than 20 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values, actions) => {
    try {
      const response = await dispatch(login(values)).unwrap();
      toast.success(`Welcome, ${response.user.name}`);
      navigate("/contacts", { replace: true });
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Invalid login data");
    }
    actions.resetForm();
  };

  return (
    <div className="container">
      <div className={css.block}>
        <h2 className={css.logTitle}>Login</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={css.form}>
              <label className={css.label}>
                Email
                <Field
                  type="email"
                  name="email"
                  className={css.input}
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
              </label>

              <label className={css.label}>
                Password
                <Field
                  type="password"
                  name="password"
                  className={css.input}
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={css.error}
                />
              </label>

              <button
                type="submit"
                className={css.buttonForm}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
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
