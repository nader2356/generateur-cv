import * as Yup from "yup";
import { FieldArray } from "formik";
import { PlusCircleOutlined, RightOutlined } from "@ant-design/icons";

import { useState } from "react";
import ExperienceProfessionelleList from "../List/ExperienceProfessionelleList";
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
  setActive,
  Active,
  Titre,
}) => {
  console.log(values);
  const Compare = (end_date, start_date) => {
    const today = new Date(end_date);
    const newDate = new Date(start_date);
    if (today.getTime() > newDate.getTime()) {
      return setErrorDate(
        "  date de fin doit etre superieur a la date de debut "
      );
    }
  };
  const Style = {
    fontSize: "25px",
    marginRight: 10,
  };
  const [Index, setIndex] = useState(false);

  const [error, setError] = useState("");
  const [errorDate, setErrorDate] = useState("");
  return (
    <div className=" w-full h-full  ">
      <FieldArray
        name={namespace + ".experienceProfessionnelle"}
        render={(arrayHelpers) => (
          <>
            <div className="w-11/12 ml-1   ">
              <div className="flex flex-row  justify-between  bg-panel     pt-3 h-14  pl-4 border-r-2     border-l-2 border-b-2 border-border_color">
                <h4 className="text-xl font-bold text-black pt-0">{Titre}</h4>

                <RightOutlined
                  className="pt-2 pr-3"
                  onClick={() => setActive(Titre)}
                />
              </div>

              {values.experienceProfessionnelle.map((ex, index) => {
                return (
                  <>
                    <div
                      className={
                        (Active === Titre ? "show3" : "") + " accordionContent3"
                      }
                      key={index}
                    >
                      {values.experienceProfessionnelle && (
                        <>
                          <ExperienceProfessionelleList
                            arrayHelpers={arrayHelpers}
                            index={index}
                            Index={Index}
                            error={error}
                            errorDate={errorDate}
                            Id={index}
                            setIndex={setIndex}
                            handleChange={handleChange}
                            namespace={namespace}
                          ></ExperienceProfessionelleList>
                        </>
                      )}

                      <div
                        className="flex"
                        onClick={() => {
                          let start_date = new Date(
                            values.experienceProfessionnelle[index].startDate
                          );

                          let end_date = new Date(
                            values.experienceProfessionnelle[index].endDate
                          );
                          {
                            Compare(end_date, start_date);
                          }

                          {
                            !values.experienceProfessionnelle[index]
                              .startDate ||
                            !values.experienceProfessionnelle[index].endDate ||
                            !values.experienceProfessionnelle[index].Lieu ||
                            !values.experienceProfessionnelle[index].detail ||
                            !values.experienceProfessionnelle[index]
                              .nomDulEntreprise ||
                            !values.experienceProfessionnelle[index].typeDEmploi
                              ? setError(" veuillez completer  les champs ")
                              : arrayHelpers.push(
                                  experienceProfessionnelleInitialValues
                                );
                          }
                        }}
                      >
                        <button
                          class="bg-[#1877F2] flex  text-sm  mt-5 ml-9 mb-4 sm:text-base items-center justify-center  text-white rounded-lg  duration-300  border border-transparent px-8 py-2.5"
                          type="button"
                        >
                          <PlusCircleOutlined
                            style={Style}
                          ></PlusCircleOutlined>
                          <span>Ajouter une expérience Professionnelles</span>
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
      ></FieldArray>
    </div>
  );
};

export default ExperienceProfessionnelle;
