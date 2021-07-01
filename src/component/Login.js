import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect, useSelector } from "react-redux";
import { login } from "../action/index";
import RenderInput from "./common/input";
import { useHistory } from "react-router";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required!";
  }
  if (!values.password) {
    errors.password = "Required!";
  }
  return errors;
};

const Login = ({ handleSubmit, pristine, reset, submitting, login }) => {
  const user = useSelector((state) => state.user);

  const history = useHistory();
  const onSubmit = (values) => {
    login(values, history);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
      <Field name="email" component={RenderInput} label="Email" type="text" />
      <Field
        name="password"
        component={RenderInput}
        label="Password"
        type="password"
      />
      <button
        type="submit"
        disabled={submitting || pristine}
        className="ui primary button"
      >
        Submit
      </button>
    </form>
  );
};

export default compose(
  connect(null, { login }),
  reduxForm({
    form: "Login",
    validate,
  })
)(Login);
