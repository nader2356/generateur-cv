import { PlusCircleOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import ExperienceProfessionnelleItems from "../Item/ExperienceProfessionnelleItems";

const ExperienceProfessionnelle = ({
  formValuesOExperiencesProfessionelles,
  setformValuesOExperiencesProfessionelles,
  Active,
  setActive,
  Titre,
  isLimitDetail,
  limit,
}) => {
  const Style = {
    fontSize: "25px",
    marginRight: 10,
  };

  const [message, setMessage] = useState([]);

  const experienceProfessionellesDetailsListAddField =
    (actionType) => (event) => {
      event.preventDefault();
      let errorMsg = formValuesOExperiencesProfessionelles.map((user, key) => {
        let start_date = new Date(
          formValuesOExperiencesProfessionelles[
            formValuesOExperiencesProfessionelles.length - 1
          ].startDate
        );
        let end_date = new Date(
          formValuesOExperiencesProfessionelles[
            formValuesOExperiencesProfessionelles.length - 1
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

        if (!user.lieu) {
          error.lieu = "Obligatoire";
          valid = false;
        } else {
          error.lieu = "";
        }
        if (!user.nomDulEntreprise) {
          error.nomDulEntreprise = "Obligatoire";
          valid = false;
        } else {
          error.nomDulEntreprise = "";
        }

        if (!user.startDate) {
          error.startDate = "Obligatoire";
          valid = false;
        } else {
          error.startDate = "";
        }
        if (!user.endDate) {
          error.endDate = "Obligatoire";
          valid = false;
        } else {
          error.endDate = "";
        }
        if (!user.typeDEmploi) {
          error.typeDEmploi = "Obligatoire";
          valid = false;
        } else {
          error.typeDEmploi = "";
        }
        if (!user.detail) {
          error.detail = "Obligatoire";
          valid = false;
        } else {
          error.detail = "";
        }
        if (
          formValuesOExperiencesProfessionelles.length - 1 === key &&
          valid &&
          actionType === "add"
        ) {
          setformValuesOExperiencesProfessionelles([
            ...formValuesOExperiencesProfessionelles,
            {
              typeDEmploi: "",
              lieu: "",
              nomDulEntreprise: "",
              startDate: "",
              endDate: "",
              detail: "",
            },
          ]);
        }
        return error;
      });
      setMessage(errorMsg);
    };
  const [activeIndex, setActiveIndex] = useState(0);

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
            {formValuesOExperiencesProfessionelles.map(
              (experienceProfessionnelle, index) => {
                return (
                  <div key={index}>
                    <ExperienceProfessionnelleItems
                      index={index}
                      message={message}
                      setActiveIndex={setActiveIndex}
                      formValuesOExperiencesProfessionelles={
                        formValuesOExperiencesProfessionelles
                      }
                      setformValuesOExperiencesProfessionelles={
                        setformValuesOExperiencesProfessionelles
                      }
                      activeIndex={activeIndex}
                      exp={experienceProfessionnelle}
                      isLimitDetail={isLimitDetail}
                     
                      limit={limit}
                      
                    ></ExperienceProfessionnelleItems>
                  </div>
                );
              }
            )}

            <div className="flex">
              <button
                className="   text-sm  mt-2 ml-9 mb-2 sm:text-base items-center justify-center  text-[#1877F2]   px-8 py-2.5"
                type="button"
              >
                <PlusCircleOutlined
                  style={Style}
                  onClick={experienceProfessionellesDetailsListAddField("add")}
                ></PlusCircleOutlined>
                <span>Ajouter une expérience Professionnelle</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceProfessionnelle;
