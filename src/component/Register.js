import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import RenderInput from "./common/input";
import { register } from "./../action/index";
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

const Register = ({ handleSubmit, pristine, reset, submitting, register }) => {
  const history = useHistory();
  const onSubmit = (values) => {
    register(values, history);
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
        Register
      </button>
    </form>
  );
};

export default compose(
  connect(null, { register }),
  reduxForm({
    form: "Register",
    validate,
  })
)(Register);
