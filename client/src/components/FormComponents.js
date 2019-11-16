import React from "react";
import ReactDOM from "react-dom";

const TextInput = ({ label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input> and alse replace ErrorMessage entirely.
   const [field, meta] = useField(props);
   return (
     <>
       <label htmlFor={props.id || props.name}>{label}</label>
       <input className="text-input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
   );
 };