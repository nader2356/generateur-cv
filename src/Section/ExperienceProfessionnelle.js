import * as Yup from "yup";
import { FieldArray } from "formik";
import { PlusCircleOutlined, RightOutlined } from "@ant-design/icons";

import { useState } from "react";
import ExperienceProfessionnelleItems from "../items/ExperienceProfessionnelleItems";

const experienceProfessionnelleInitialValues = {
  typeDEmploi: "",
  lieu: "",
  nomDulEntreprise: "",
  startDate: "",
  endDate: "",
  detail: "",
};

export const experienceProfessionnelleValidationSchema = Yup.object().shape({
  experienceProfessionnelle: Yup.array().of(
    Yup.object().shape({
      lieu: Yup.string().required("Obligatoire"),
      typeDEmploi: Yup.string().required("Obligatoire"),
      nomDulEntreprise: Yup.string().required("Obligatoire"),
      startDate: Yup.date().required("Obligatoire"),
      endDate: Yup.date().required("Obligatoire"),
      detail: Yup.string().required("Obligatoire"),
    })
  ),
});

export const experienceInitial = {
  experienceProfessionnelle: [experienceProfessionnelleInitialValues],
};

const ExperienceProfessionnelle = ({
  handleChange,
  namespace,
  values,
  Active,
  setActive,
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
    let start_date = new Date(values[values.length - 1].startDate);
    let end_date = new Date(values[values.length - 1].endDate);

    if (
      end_date.getTime() < start_date.getTime() ||
      !values[values.length - 1].startDate ||
      !values[values.length - 1].endDate ||
      !values[values.length - 1].lieu ||
      !values[values.length - 1].detail ||
      !values[values.length - 1].nomDulEntreprise ||
      !values[values.length - 1].typeDEmploi
    ) {
      setErrorDate("  date de fin doit etre superieur a la date de debut ");
      setError(" veuillez completer  les champs ");
    } else {
      arrayHelpers.push(experienceProfessionnelleInitialValues);
    }
  };

  return (
    <div className=" w-full h-full  ">
      <div className="w-11/12 ml-1 bg-white border-l-2 border-r-2 border-b-2 border-border_color  ">
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
              name={namespace + ".experienceProfessionnelle"}
              render={(arrayHelpers) => (
                <>
                  {values.experienceProfessionnelle.map(
                    (experienceProfessionnelle, index) => {
                      return (
                        <div key={index}>
                          <ExperienceProfessionnelleItems
                            index={index}
                            handleChange={handleChange}
                            arrayHelpers={arrayHelpers}
                            error={error}
                            errorDate={errorDate}
                            namespace={namespace}
                            setActiveIndex={setActiveIndex}
                            activeIndex={activeIndex}
                            exp={experienceProfessionnelle}
                          ></ExperienceProfessionnelleItems>
                        </div>
                      );
                    }
                  )}

                  <div
                    className="flex"
                    onClick={() => {
                      testData(values.experienceProfessionnelle, arrayHelpers);
                    }}
                  >
                    <button
                      className="   text-sm  mt-2 ml-9 mb-2 sm:text-base items-center justify-center  text-[#1877F2]   px-8 py-2.5"
                      type="button"
                    >
                      <PlusCircleOutlined style={Style}></PlusCircleOutlined>
                      <span>Ajouter une expérience Professionnelle</span>
                    </button>
                  </div>
                </>
              )}
            ></FieldArray>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceProfessionnelle;
