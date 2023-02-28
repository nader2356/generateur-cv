import * as Yup from "yup";
import { FieldArray } from "formik";
import { PlusCircleOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import ParcoursAcadémqueItems from "../items/ParcourAcademiqueItem";


const schoolInitialValues = {
  nomDuDiplome: "",
  Lieu: "",
  nomDeLecole: "",
  startDate: "",
  endDate: "",
  detail: "",
};

export const educationValidationSchema = Yup.object().shape({
  education: Yup.array().of(
    Yup.object().shape({
      Lieu: Yup.string().required("Obligatoire"),
      nomDuDiplome: Yup.string().required("Obligatoire"),
      nomDeLecole: Yup.string().required("Obligatoire"),
      startDate: Yup.date().required("Obligatoire"),
      endDate: Yup.date().required("Obligatoire"),
      detail: Yup.string().required("Obligatoire"),
    })
  ),
});

export const educationInitial = {
  education: [schoolInitialValues],
};

const ParcourAcademique = ({
  handleChange,
  namespace,
  values,
  setActive,
  Active,
  Titre,
}) => {
  const Style = {
    fontSize: "25px",
    marginRight: 10,
  };

  const [error, setError] = useState("");
  const [errorDate, setErrorDate] = useState("");

  const [activeIndex, setActiveIndex] = useState(0);





  const testData = (values, arrayHelpers) => {
    console.log(values.length)
    const endDate = new Date(values[values.length - 1].endDate);
    const startDate = new Date(values[values.length - 1].startDate);

    if (
      endDate.getTime() < startDate.getTime() ||
      !values[values.length - 1].startDate ||
      !values[values.length - 1].endDate ||
      !values[values.length - 1].Lieu ||
      !values[values.length - 1].nomDeLecole ||
      !values[values.length - 1].detail ||
      !values[values.length - 1].nomDuDiplome
    ) {
      setErrorDate(" la  date de fin doit etre superieur a la date de debut ");
      setError(" veuillez completer  les champs ");
    } else {
      arrayHelpers.push(schoolInitialValues);
  
    }
  };

  return (
    <div className=" w-full h-full   ">
      <div className="w-11/12 ml-1 bg-white border-l-2 border-r-2 border-border_color  ">
        <div className="flex flex-row  justify-between  bg-panel     pt-3 h-14  pl-4   border-t-2     border-border_color">
          <h4 className="text-xl font-bold text-black pt-0">{Titre}</h4>
          <RightOutlined
            className="pt-2 pr-3 cursor-pointer "
            onClick={() => setActive(Titre)}
          />
        </div>
        {Active === Titre && (
          <>
            <FieldArray
              name={namespace + ".education"}
              render={(arrayHelpers) => (
                <>
                  {values.education.map((edu, index) => {
                    return (
                      <div key={index}>
                        <ParcoursAcadémqueItems
                          index={index}
                          handleChange={handleChange}
                          arrayHelpers={arrayHelpers}
                          error={error}
                          errorDate={errorDate}
                          namespace={namespace}
                          setActiveIndex={setActiveIndex}
                          activeIndex={activeIndex}
                        ></ParcoursAcadémqueItems>
                      </div>
                    );
                  })}
                  <div
                    className="flex"
                    onClick={() => {
                      testData(values.education, arrayHelpers);
                    }}
                  >
                    <button
                      className="   text-sm  mt-2 ml-9 mb-2 sm:text-base items-center justify-center  text-[#1877F2]   px-8 py-2.5"
                      type="button"
                    >
                      <PlusCircleOutlined style={Style}></PlusCircleOutlined>
                      <span>Ajouter un parcours Académique</span>
                    </button>
                  </div>
                </>
              )}
            ></FieldArray>
            <div className="flex   justify-end">
              <button
                className=" text-sm font-medium h-10  mr-10   rounded-md border border-transparent text-white bg-black  focus:outline-none 
                            focus:ring-2 focus:ring-offset-2   mb-4  w-32 "
                onClick={() => setActive("Expériences Professionnelles")}
              >
                suivant{" "}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ParcourAcademique;
