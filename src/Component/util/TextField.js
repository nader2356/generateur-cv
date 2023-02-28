import { Field, useField } from "formik";
import { useEffect, useState } from "react";
export const MyTextField = (props) => {
  const [field] = useField(props);
  const limit = 600;
  const [charCount, setcharcount] = useState(0);
  useEffect(() => {}, [charCount]);

  return (
    <>
      <Field
        {...field}
        {...props}
        onChange={(e) => {
          const count = e.target.value.length;
          setcharcount(count);
          field.onChange(e);
        }}
      ></Field>
      <div className="flex justify-end ">
        {charCount} / {limit}
      </div>
    </>
  );
};
