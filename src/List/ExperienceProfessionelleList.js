import { Field } from "formik";
import { RightOutlined } from "@ant-design/icons";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Error } from "../Component/Error";

const ExperienceProfessionelleList = ({
  index,
  Index,
  handleChange,
  namespace,
  arrayHelpers,
  Id,
  error,
  errorDate,
  setIndex,
}) => {
  const handleSetIndex = (Id) => {
    Index !== Id && setIndex(Id);
  };

  const Style = {
    fontSize: "25px",
    marginTop: 5,
    color: "#cf5454",
  };

  return (
    <>
      <div class="flex  w-11/12 h-full ml-14 mt-2 ">
        <div class="flex flex-row justify-between md:w-full bg-panel mt-5 mb-5  border-border_color border-solid  border-b-2 border-l-2 border-r-2 border-t-2   h-14  pl-4 pt-3 ">
          <h4 className="text-xl font-bold text-black  pt-0">
            Expérience Professionnelle n {index + 1}
          </h4>
          <CloseCircleOutlined
            style={Style}
            onClick={() => arrayHelpers.remove(index)}
          />

          <RightOutlined className="pt-2 pr-3" onClick={handleSetIndex(Id)} />
        </div>
      </div>

      {Index === Id && (
        <>
          <div className="flex flex-row justify-between flex-wrap pt-5 border-border_color -mt-5 pb-8 w-11/12 ml-14 pl-8 pr-10 border-l-2  border-r-2  border-b-2  ">
            <div className="w-2/4  ">
              <h6 className="text-black text-lg"> Date de début</h6>
              <Field
                type="date"
                className="bg-panel rounded-[5px] pt-2 pb-2 mt-4 pl-2   -mb-0 border-solid border border-barckground_textarea w-full"
                name={
                  namespace + `.experienceProfessionnelle.${index}.startDate`
                }
                onChange={handleChange}
              />
              <h5 className="text-red ">{errorDate}</h5>
              <Error
                name={
                  namespace + `.experienceProfessionnelle.${index}.startDate`
                }
              />
            </div>
            <div className="w-2/4 pl-12 ">
              <h6 className="text-black  text-lg">Date de fin</h6>
              <Field
                type="date"
                className="  mt-4 bg-panel rounded-md pt-2 pb-2  pl-2 border-solid border border-barckground_textarea w-full"
                name={namespace + `.experienceProfessionnelle.${index}.endDate`}
                onChange={handleChange}
              />
              <Error
                name={namespace + `.experienceProfessionnelle.${index}.endDate`}
              />
            </div>

            <div className="w-2/4 mt-0">
              <h6 className="text-black text-lg"> Type d’emploi*</h6>
              <select
                id="countries"
                onChange={handleChange}
                name={namespace + `.experienceProfessionnelle.${index}.typeDEmploi`}
                className="bg-gray-50 border mt-4  bg-panel  border-gray text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Choisir un type d emploi</option>
                <option value="Freelance">Freelance</option>
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="Mission">Mission</option>
              </select>
              <Error
                name={
                  namespace + `.experienceProfessionnelle.${index}.typeDEmploi`
                }
              />
            </div>
            <div className="w-1/2 pl-12">
              <h6 className="text-black  text-lg">Nom de l'entreprise*</h6>
              <Field
                type="text"
                onChange={handleChange}
                name={
                  namespace +
                  `.experienceProfessionnelle.${index}.nomDulEntreprise`
                }
                placeholder=" ex : EPI"
                className="bg-panel   mt-4 rounded-md pt-2 pb-2 pl-2 border-solid border   w-full border-barckground_textarea"
              />
              <Error
                name={
                  namespace + `.experienceProfessionnelle.${index}.nomDulEntreprise`
                }
              />
            </div>

            <div className="w-1/2   ">
              <h6 className="text-black  text-lg">Lieu</h6>
              <Field
                type="text"
                onChange={handleChange}
                name={namespace + `.experienceProfessionnelle.${index}.lieu`}
                placeholder=" ex : Sousse"
                className="bg-panel rounded-md  mt-4 pt-2 pb-2 pl-2  border-solid border w-full  border-barckground_textarea"
              />
              <Error
                name={namespace + `.experienceProfessionnelle.${index}.lieu`}
              />
            </div>
            <div className="w-1/2   ">
              <h6 className="text-black text-lg   pl-12">Détail</h6>
              <Field
                type="textarea"
                onChange={handleChange}
                name={namespace + `.experienceProfessionnelle.${index}.detail`}
                className="bg-barckground_textarea rounded-[5px] pt-2 pl-4 pb-16  ml-12 mt-4  w-11/12  border-solid border border-barckground_textarea "
              />
              <div className="pl-12">
                <Error
                  name={
                    namespace + `.experienceProfessionnelle.${index}.detail`
                  }
                />
              </div>
            </div>
            <h5 className="text-red    mt-8 ">{error}</h5>
          </div>
        </>
      )}
    </>
  );
};

export default ExperienceProfessionelleList;
