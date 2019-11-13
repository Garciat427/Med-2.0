import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./styles.css";
import "./styles-custom.css";

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
const DiagnosisForm3 = () => {
  return (
    <>
      <h1>Diagnosis Form 3</h1>
      <Formik
        initialValues={{
          firstSymptom: "",
          secondSymptom: "",
          thirdSymptom: "",
          fourthSymptom: "",
          fifthSymptom: ""
        }}
        validationSchema={Yup.object({
          firstSymptom: Yup.string()
            // specify the set of valid values
            // @see http://bit.ly/yup-mixed-oneOf
          .oneOf(
            ["symptom1", "symptom2", "symptom3", "symptom4", "symptom5"],
            "Invalid Symptom"
          )
          .required("Required"),
          secondSymptom: Yup.string()
          .oneOf(
            ["symptom1", "symptom2", "symptom3", "symptom4", "symptom5"],
            "Invalid Symptom"
          )
            .required("Required"),
            thirdSymptom: Yup.string()
          .oneOf(
            ["symptom1", "symptom2", "symptom3", "symptom4", "symptom5"],
            "Invalid Symptom"
          ),
            //.required("Required"),
            fourthSymptom: Yup.string()
          .oneOf(
            ["symptom1", "symptom2", "symptom3", "symptom4", "symptom5"],
            "Invalid Symptom"
          ),
            //.required("Required"),
            fifthSymptom: Yup.string()
          .oneOf(
            ["symptom1", "symptom2", "symptom3", "symptom4", "symptom5"],
            "Invalid Symptom"
          )
           // .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MySelect label="1. Symptom" name="firstSymptom">
            <option value="">Select</option>
            <option value="symptom1">Symptom1</option>
            <option value="symptom2">Symptom2</option>
            <option value="symptom3">Symptom3</option>
            <option value="symptom4">Symptom4</option>
            <option value="symptom5">Symptom5</option>
          </MySelect>
          <MySelect label="2. Symptom" name="secondSymptom">
          <option value="symptom1">Symptom1</option>
            <option value="symptom2">Symptom2</option>
            <option value="symptom3">Symptom3</option>
            <option value="symptom4">Symptom4</option>
            <option value="symptom5">Symptom5</option>
          </MySelect>
          <MySelect label="3. Symptom" name="thirdSymptom">
            <option value="">Select</option>
            <option value="symptom1">Symptom1</option>
            <option value="symptom2">Symptom2</option>
            <option value="symptom3">Symptom3</option>
            <option value="symptom4">Symptom4</option>
            <option value="symptom5">Symptom5</option>
          </MySelect>
          <MySelect label="4. Symptom" name="fourthSymptom">
          <option value="symptom1">Symptom1</option>
            <option value="symptom2">Symptom2</option>
            <option value="symptom3">Symptom3</option>
            <option value="symptom4">Symptom4</option>
            <option value="symptom5">Symptom5</option>
          </MySelect>
          <MySelect label="5. Symptom" name="fifthSymptom">
            <option value="">Select</option>
            <option value="symptom1">Symptom1</option>
            <option value="symptom2">Symptom2</option>
            <option value="symptom3">Symptom3</option>
            <option value="symptom4">Symptom4</option>
            <option value="symptom5">Symptom5</option>
          </MySelect>
          <p></p>
          <p>Please click the submit button after selecting at least the first two symptoms above</p>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
function App() {
  return <DiagnosisForm3 />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
