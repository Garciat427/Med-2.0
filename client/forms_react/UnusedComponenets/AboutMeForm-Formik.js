//Import Dependencies
import React, { Component } from "react";
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

//Form Params and settings
const FormParamaters = Yup.object().shape({
    birthYear: Yup.number()
      .moreThan(1899, "Birth Year must be greater that 1900") 
      .typeError('Birth year must be a number')
      .required("Required"),
    location: Yup.string()
      .min(5, "Must be 20 characters or less")
      .required("Required"),
    acceptedTerms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions."),
    gender: Yup.string()
      .required("Required")
});

const FormInitialValues = {
  birthYear: "",
  gender: "",
  location: "", // added for our select
  acceptedTerms: false // added for our checkbox
};

const handleFormSubmit = event => {
  event.preventDefault();
  console.log(event);
};

class Diagnosis extends Component {

  


  render (){ 
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>Diagnosis Form 1</h1>
            <Formik validationSchema={FormParamaters} initialValues={FormInitialValues}>
            {({ errors, touched }) => (
              <Form onSubmit={handleFormSubmit}>
                <div className="row">
                  
                  {/* Year of Birth */}
                  <div className="input-field col s6">
                    Year Of Birth (Required)
                    <Field name="birthYear" placeholder="YYYY"/>
                    {/* Errors */}
                    {errors.birthYear && touched.birthYear ? (
                      <div className="invalidInput">{errors.birthYear}</div>
                    ) : null}
                  </div>
                  
                  {/* Gender */}
                  <div className="input-field col s6">
                    Gender (Required)
                    <Field component="select" name="gender" placeholder="Test">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="male">Other</option>
                    </Field>
                    {/* Errors */}
                    {errors.gender && touched.gender ? (
                      <div className="invalidInput">{errors.gender}</div>
                    ) : null}

                  </div>
                </div>
                  
                <button type="submit">Submit</button>
              </Form>
            )}
            </Formik>             
          </div>   
        </div>
      </div>
        )
    }

}

export default Diagnosis;
