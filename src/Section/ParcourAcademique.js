import * as Yup from "yup";
import { FieldArray } from "formik";
import { PlusCircleOutlined, RightOutlined } from "@ant-design/icons";
import ParcourAcademiqueList from "../List/ParcourAcademiqueList";
import { useState } from "react";
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
        name={namespace + ".education"}
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

              {values.education.map((edu, index) => {
                return (
                  <>
                    <div
                      className={
                        (Active === Titre ? "show3" : "") + " accordionContent3"
                      }
                      key={index}
                    >
                      {values.education && (
                        <>
                          <ParcourAcademiqueList
                            arrayHelpers={arrayHelpers}
                            index={index}
                            Index={Index}
                            error={error}
                            errorDate={errorDate}
                            Id={index}
                            setIndex={setIndex}
                            handleChange={handleChange}
                            namespace={namespace}
                          ></ParcourAcademiqueList>
                        </>
                      )}

                      <div
                        className="flex"
                        onClick={() => {
                          let start_date = new Date(
                            values.education[index].startDate
                          );

                          let end_date = new Date(
                            values.education[index].endDate
                          );
                          {
                            Compare(end_date, start_date);
                          }

                          {
                            !values.education[index].startDate ||
                            !values.education[index].endDate ||
                            !values.education[index].Lieu ||
                            !values.education[index].detail ||
                            !values.education[index].nomDeLecole ||
                            !values.education[index].nomDuDiplome
                              ? setError(" veuillez completer  les champs ")
                              : arrayHelpers.push(schoolInitialValues);
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
                          <span>Ajouter un parcour Academique</span>
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

export default ParcourAcademique;
