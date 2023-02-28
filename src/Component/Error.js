/* eslint-disable no-unused-vars */


import { useField } from "formik";



export const Error = props =>  {
    const {name} = props;
  const [field, meta] = useField(name);

  return (
    <>
      {meta.touched && meta.error ? (
        <h5 className="text-red text-sm   mt-2">{meta.error}</h5>
      ) : null}
    </>
  );
}
