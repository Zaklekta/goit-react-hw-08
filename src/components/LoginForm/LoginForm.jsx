import css from "./LoginForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid e-mail adress").required("Required"),
  password: Yup.string()
    .min(8, "Too Short! The password must containe at least 8 characters")
    .max(100, "Too Long!")
    .required("Required"),
});
const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    console.log("values ", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.form}>
        <label className={css.inputLabel}>
          <span className={css.span}>Email</span>
          <Field
            className={css.input}
            type="text"
            name="email"
            placeholder="miaWallace@i.ua"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.inputLabel}>
          <span className={css.span}>Password</span>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>

        <button className={css.submitBtn} type="submit">
          Log In
        </button>
        {error && (
          <p className={css.error}>
            {" "}
            Ooops.. Some error has occured... {error}
          </p>
        )}
      </Form>
    </Formik>
  );
};

export default LoginForm;
