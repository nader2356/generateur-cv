

import { useField } from "formik";



export const Error = props =>  {
    const {name} = props;
  const [field, meta] = useField(name);

  return (
    <>
      {meta.touched && meta.error ? (
        <h5 className="text-[#cf5454] text-[14px] mt-[15px]">{meta.error}</h5>
      ) : null}
    </>
  );
}
