import { Field } from "formik";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Error } from "../Component/Error";
import { MyTextField } from "../Component/util/TextField";

const ExperienceProfessionnelleItems = ({
  index,
  error,
  errorDate,
  arrayHelpers,
  namespace,
  handleChange,
  setActiveIndex,
  activeIndex,
  exp,
}) => {

  return (
    <div className="  pl-4 pr-4 mt-2 container" key={index}>
      <div className="grid grid-cols-3   bg-panel mt-5 mb-5  border-border_color border-solid  border-b-2 border-l-2 border-r-2 border-t-2   h-14  pl-4 pt-3 ">
        <h4 className="text-xl  col-span-1 font-bold w-96 text-black  pt-0">
          Expérience Professionnelle n {index + 1}
        </h4>
        <div className="col-span-2 text-right">
          <CloseCircleOutlined
            className={
              index === 0 ? "hidden" : "text-red text-24px mt-1 mr-5  "
            }
            onClick={() => arrayHelpers.remove(index)}
          />
          <RightOutlined
            className="pt-2 pr-3 cursor-pointer "
            onClick={() => setActiveIndex(index)}
          />
        </div>
      </div>
      {activeIndex === index ? (
        <div className="   pt-5 overflow-visible opacity-100 h-full  border-border_color -mt-5 pb-8  w-full  pl-8 pr-10 border-l-2  border-r-2  border-b-2 ">
          <div className="flex  space-x-5">
            <div className="w-1/2 mb-2">
              <div className="flex space-x-4">
                <div className="w-11/12">
                  <h6 className="text-black text-lg"> Date de début*</h6>
                  <Field
                    type="date"
                    onChange={handleChange}
                    name={
                      namespace +
                      `.experienceProfessionnelle.${index}.startDate`
                    }
                    placeholder="ex : 20/05/2023"
                    className="bg-panel  mt-4 rounded-md pt-2 pb-2  pl-2   border-solid border w-full border-barckground_textarea"
                  />
                    <Error
                  name={
                    namespace +
                    `.experienceProfessionnelle.${index}.startDate`
                  }
                />

                </div>
                <div className="w-11/12">
                  <h6 className="text-black text-lg">Date de fin*</h6>
                  <Field
                    type="date"
                    onChange={handleChange}
                    name={
                      namespace + `.experienceProfessionnelle.${index}.endDate`
                    }
                    placeholder="ex : 20/06/2023"
                    className="bg-panel  mt-4 rounded-md pt-2 pb-2  pl-2   border-solid border w-full border-barckground_textarea"
                  />
                    <Error
                  name={
                    namespace +
                    `.experienceProfessionnelle.${index}.endDate`
                  }
                />
                </div>
              </div>
            </div>

            <div className="w-1/2 mb-2">
              <div className="w-full space-x-0">
                <h6 className="text-black  text-lg  ml-1">
                  nom de l entreprise *
                </h6>
                <Field
                  type="text"
                  onChange={handleChange}
                  name={
                    namespace +
                    `.experienceProfessionnelle.${index}.nomDulEntreprise`
                  }
                  placeholder=" ex : Proxym"
                  className="bg-panel rounded-md  mt-4  -ml-3 pt-2 pb-2 pl-y2 w-full   border-solid border   border-barckground_textarea"
                />
                <Error
                  name={
                    namespace +
                    `.experienceProfessionnelle.${index}.nomDulEntreprise`
                  }
                />
              </div>
            </div>
            
          </div>
          <h5 className="text-red    ">{errorDate}</h5>
          <div className="flex  space-x-5">
            <div className="w-1/2 ">
              <h6 className="text-black text-lg">Type d’emploi*</h6>
              <select
                onChange={handleChange}
                name={
                  namespace + `.experienceProfessionnelle.${index}.typeDEmploi`
                }
                defaultValue={exp.typeDEmploi}
                className=" border border-gray bg-panel  mt-3  text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              >
                <option>Choisir un type d’emploi</option>
                <option value="Freelance">Freelance</option>
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="DMission">Mission</option>
              </select>
              <Error
                name={
                  namespace + `.experienceProfessionnelle.${index}.typeDEmploi`
                }
              />
            </div>
            <div className="w-1/2 ">
              <h6 className="text-black  text-lg">Lieu</h6>
              <Field
                type="text"
                onChange={handleChange}
                name={namespace + `.experienceProfessionnelle.${index}.lieu`}
                placeholder=" ex : Sousse"
                className="bg-panel rounded-md  mt-4 pt-2 pb-2 pl-2 w-full  border-solid border   border-barckground_textarea"
              />
              <Error
                name={namespace + `.experienceProfessionnelle.${index}.lieu`}
              />
            </div>
          </div>
          <div className="flex ">
            <div className="w-full mt-4">
              <h6 className="text-black text-lg   ">Détail</h6>
              <MyTextField
                as="textarea"
                maxLength="600"
                onChange={handleChange}
                name={namespace + `.experienceProfessionnelle.${index}.detail`}
                className="bg-barckground_textarea rounded-md pt-2 pl-2 pb-16  mt-4  w-full  border-solid border border-barckground_textarea "
              />

              <div className="-mt-5">
                <Error
                  name={
                    namespace + `.experienceProfessionnelle.${index}.detail`
                  }
                />
              </div>
            </div>
          </div>
          <h5 className="text-red mt-2">{error}</h5>
        </div>
      ) : null}
    </div>
  );
};

export default ExperienceProfessionnelleItems;
