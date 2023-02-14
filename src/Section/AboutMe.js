import { Field } from "formik";
import { RightOutlined } from "@ant-design/icons";
import * as Yup from "yup";
import { Error } from "../Component/Error";
import { Button } from "antd";

export const aboutMeValidationSchema = Yup.object().shape({
  poste: Yup.string().required(" Obligatoire"),
  description: Yup.string().required(" Obligatoire"),
});

export const aboutMeInitialValues = {
  poste: "",
  description: "",
};
const AboutMe = ({
  handleChange,
  namespace,
  values,
  Active,
  setActive,
  Titre,
}) => {
  return (
    <div className="w-11/12 ml-1  border-border_color border-r-2    border-l-2  ">
      <div className="flex flex-row  justify-between  bg-panel border-t-2 border-border_color border-solid  border-b-2  pt-3 h-14  pl-4  ">
        <h4 className="text-xl font-bold text-black pt-0">{Titre}</h4>
       
      </div>

      <div className={(Active === Titre ? "show" : "") + " accordionContent"}>
        <div className="w-full  pt-8">
          <h6 className="text-black text-lg font-normal pb-4">Poste</h6>
          <Field
            type="text"
            onChange={handleChange}
            name={namespace + ".poste"}
            placeholder=" ex : Ingenieur"
            className="bg-panel rounded-md pt-2 pb-2 mt- pl-2 md:w-97%  border-solid border border-barckground_textarea"
          />
        </div>
        <Error name={namespace + ".poste"}></Error>
        <div className="w-full   mt-5">
          <h6 className="text-black text-lg font-normal">Description</h6>
          <Field
            type="textarea"
            onChange={handleChange}
            name={namespace + ".description"}
            className="bg-barckground_textarea rounded-[5px] pt-2 pl-4 pb-16   mt-4  md:w-97%  border-solid border border-barckground_textarea "
          />
          <Error name={namespace + ".description"} className="mb-1"></Error>
        </div>
      </div>
      <button className="pt-2 pr-3" onClick={() => setActive(Titre)} >suivant </button>
    </div>
  );
};

export default AboutMe;
