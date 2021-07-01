import React from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import { createPost } from "../action/index";
import RenderInput from "./common/input";
import { useHistory } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required!";
  }
  if (!values.message) {
    errors.message = "Required!";
  }
  if (!values.name) {
    errors.name = "Required!";
  }
  if (!values.creator) {
    errors.creator = "Required!";
  }
  return errors;
};

const PostCreate = ({ handleSubmit, pristine, reset, submitting, login }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(createPost(values, history));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
      <Field name="title" component={RenderInput} label="Title" type="text" />
      <Field
        name="content"
        component={RenderInput}
        label="Content"
        type="text"
      />

      <Field name="name" component={RenderInput} label="Name" type="text" />
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

export default reduxForm({
  form: "Login",
  validate,
})(PostCreate);
