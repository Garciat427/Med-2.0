import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./styles.css";
import "./styles-custom.css";

/*const MyTextInput = ({ label, ...props }) => {*/
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  /*const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};*/

/*const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};*/

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

// And now we can use these
const DiagnosisForm2 = () => {
  return (
    <>
      <h1>Diagnosis Form 2</h1>
      <Formik
        initialValues={{
          bodyPart: "",
          specificBodyPart: "",
        }}
        validationSchema={Yup.object({
          bodyPart: Yup.string()
            // specify the set of valid values
            // @see http://bit.ly/yup-mixed-oneOf
          .oneOf(
            ["head", "neck", "trunk", "arms", "legs"],
            "Invalid Body Part"
          )
          .required("Required"),
          specificBodyPart: Yup.string()
          .oneOf(
            ["value1", "value2", "value3", "value4", "value5"],
            "Invalid Specific Body Part"
          )
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MySelect label="Body Part" name="bodyPart">
            <option value="">Select</option>
            <option value="head">Head</option>
            <option value="neck">Neck</option>
            <option value="trunk">Trunk</option>
            <option value="arms">Arms</option>
            <option value="legs">Legs</option>
          </MySelect>
          <p></p>
          <p>Please select the body part first, then select the specific body part below</p>
          <MySelect label="Specific Body Part" name="specificBodyPart">
            <option value="">Select</option>
            <option value="value1">Value1</option>
            <option value="value2">Value2</option>
            <option value="value3">Value3</option>
            <option value="value4">Value4</option>
            <option value="value5">Value5</option>
          </MySelect>
          <p></p>
          <p>Please click the submit button after selecting the both options above</p>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
function App() {
  return <DiagnosisForm2 />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
