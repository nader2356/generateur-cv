import { PlusCircleOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import ParcoursAcadémqueItems from "../Item/ParcourAcademiqueItem";

const ParcourAcademique = ({
  setActive,
  Active,
  Titre,
  setformValuesOParcourAcademique,
  formValuesOParcourAcademique,
}) => {
  const Style = {
    fontSize: "25px",
    marginRight: 10,
  };
  const [message, setMessage] = useState([]);

  const EducationDetailsListAddField = (actionType) => (event) => {
    event.preventDefault();
    let errorMsg = formValuesOParcourAcademique.map((education, key) => {
      let start_date = new Date(
        formValuesOParcourAcademique[
          formValuesOParcourAcademique.length - 1
        ].startDate
      );
      let end_date = new Date(
        formValuesOParcourAcademique[
          formValuesOParcourAcademique.length - 1
        ].endDate
      );

      let error = {};
      let valid = true;

      if (end_date.getTime() < start_date.getTime()) {
        error.testDate = "date de fin doit etre superieur a la date de debut";
        valid = false;
      } else {
        error.testDate = "";
      }

      if (!education.lieu) {
        error.lieu ="Obligatoire";
        valid = false;
      } else {
        error.lieu = "";
      }
      if (!education.nomDeLecole) {
        error.nomDeLecole = "Obligatoire";
        valid = false;
      } else {
        error.Lieu = "";
      }

      if (!education.startDate) {
        error.startDate = "Obligatoire";
        valid = false;
      } else {
        error.startDate = "";
      }
      if (!education.endDate) {
        error.endDate = "Obligatoire";
        valid = false;
      } else {
        error.endDate = "";
      }
      if (!education.nomDuDiplome) {
        error.nomDuDiplome = "Obligatoire";
        valid = false;
      } else {
        error.nomDuDiplome = "";
      }
      if (
        formValuesOParcourAcademique.length - 1 === key &&
        valid &&
        actionType === "add"
      ) {
        setformValuesOParcourAcademique([
          ...formValuesOParcourAcademique,
          {
            nomDuDiplome: "",
            lieu: "",
            nomDeLecole: "",
            startDate: "",
            endDate: "",
          },
        ]);
      }
      return error;
    });
    setMessage(errorMsg);

  };

  

  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);


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
            {formValuesOParcourAcademique.map((edu, index) => {
              return (
                <div key={index}>
                  <ParcoursAcadémqueItems
                    index={index}
                    formValuesOParcourAcademique={formValuesOParcourAcademique}
                    setformValuesOParcourAcademique={setformValuesOParcourAcademique}
                    message={message}
                    education={edu}
                    setIsActive ={setIsActive}
                    isActive={isActive}
                    setActiveIndex={setActiveIndex}
                    activeIndex={activeIndex}
                  ></ParcoursAcadémqueItems>
                </div>
              );
            })}
            <div className="flex">
              <button
                className="   text-sm   ml-9 mb-2 sm:text-base items-center justify-center  text-[#1877F2]   px-8 py-2.5"
                type="button"
              >
                <PlusCircleOutlined
                  style={Style}
                  onClick={EducationDetailsListAddField("add")}
                ></PlusCircleOutlined>
                <span>Ajouter un parcours Académique</span>
              </button>
            </div>

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
