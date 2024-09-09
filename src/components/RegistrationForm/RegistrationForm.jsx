import css from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short! The name must containe at least 2 characters")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid e-mail adress").required("Required"),
  password: Yup.string()
    .min(8, "Too Short! The password must containe at least 8 characters")
    .max(100, "Too Long!")
    .required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    console.log("values ", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      <Form className={css.form}>
        <label className={css.inputLabel}>
          <span className={css.span}>Name</span>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Mia Wallace"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>

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
          Sign up
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

export default RegistrationForm;
