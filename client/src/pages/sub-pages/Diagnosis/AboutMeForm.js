//Import Dependencies
import React, { Component } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

//Form Params and settings
const FormParamaters = Yup.object().shape({
    age: Yup.string()
      .min(1, "Must be 2 characters or less")
      .required("Required"),
    location: Yup.string()
      .min(2, "Must be 20 characters or less")
      .required("Required"),
    acceptedTerms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions."),
    gender: Yup.string()
      .oneOf(
        ["male", "female", "other"],  //Array with possible selections
        "Invalid Gender Type"         //Error Message if string is none above
      )
      .required("Required")
});

const FormInitialValues = {
  age: "",
  gender: "",
  location: "", // added for our select
  acceptedTerms: false // added for our checkbox
};



class Diagnosis extends Component {
  render (){ 
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>Diagnosis Form 1</h1>
            <Formik validationSchema={FormParamaters} initialValues={FormInitialValues} onSubmit={values => {console.log(values);}}>
              <Form>
                <MyTextInput
                    label="Age"
                    name="age"
                    type="number"
                    placeholder="21"
                />
                <MyTextInput
                    label="Location"
                    name="location"
                    type="text"
                    placeholder="Toronto"
                />
                <MySelect label="Gender" name="gender">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </MySelect>
                <MyCheckbox name="acceptedTerms">
                    I accept the terms and conditions
                </MyCheckbox>

                <button type="submit">Submit</button>
              </Form>
            </Formik>             
          </div>   
        </div>
      </div>
        )
    }

}

export default Diagnosis;