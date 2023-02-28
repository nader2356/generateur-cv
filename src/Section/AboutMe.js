import { RightOutlined } from "@ant-design/icons";
import { Field } from "formik";

import * as Yup from "yup";
import { Error } from "../Component/Error";
import { MyTextField } from "../Component/util/TextField.js";

export const aboutMeValidationSchema = Yup.object().shape({
  poste: Yup.string().required(" Obligatoire"),
  description: Yup.string().required(" Obligatoire"),
});

export const aboutMeInitialValues = {
  poste: "",
  description: "",
};
const AboutMe = ({ handleChange, namespace, Active, setActive, Titre }) => {
  return (
    <div className="w-11/12 ml-1  border-border_color border-r-2    border-l-2 ">
      <div className="flex flex-row  justify-between  bg-panel border-t-2 border-border_color border-solid    pt-3 h-14  pl-4  ">
        <h4 className="text-xl font-bold text-black pt-0">{Titre}</h4>
        <RightOutlined
          className="pt-2 pr-3 cursor-pointer "
          onClick={() => setActive(Titre)}
        />
      </div>
      {Active === Titre ? (
        <>
          <div className="ml-4  bg-white    flex flex-wrap justify-between">
            <div className="w-full mr-5 pt-8">
              <h6 className="text-black text-lg font-normal pb-4">Poste</h6>
              <Field
                type="text"
                onChange={handleChange}
                name={namespace + ".poste"}
                placeholder=" ex : Ingenieur"
                className="bg-panel rounded-md pt-2 pb-2  pl-2 w-full   border-solid border border-barckground_textarea"
              />
            </div>
            <Error name={namespace + ".poste"}></Error>
            <div className="w-full  mr-5 ">
              <h6 className="text-black text-lg font-normal mb-2 mt-4">
                Description
              </h6>
              <MyTextField
                as="textarea"
                maxLength="600"
                onChange={handleChange}
                name={namespace + ".description"}
                className="bg-barckground_textarea rounded-md pt-2 pl-2 pb-16   mt-4    w-full  border-solid border border-barckground_textarea "
              />

              <Error name={namespace + ".description"} className="mb-2"></Error>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className=" items-center text-sm font-medium h-10  mr-10 mt-10 mb-5   rounded-md border border-transparent text-white bg-black  focus:outline-none 
                            focus:ring-2 focus:ring-offset-2   w-32  "
              onClick={() => setActive("Informations Personnelles")}
            >
              suivant{" "}
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AboutMe;
