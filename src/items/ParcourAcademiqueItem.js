import { Field } from "formik";

import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Error } from "../Component/Error";
import { MyTextField } from "../Component/util/TextField";


const ParcoursAcadémqueItems = ({
  index,
  error,
  errorDate,
  arrayHelpers,
  namespace,
  handleChange,
  setActiveIndex,
  activeIndex,
}) => {

  return (
    <div className="   pl-4 pr-4 mt-2  " key={index}>
      <div className="grid grid-cols-3   bg-panel mt-5 mb-5  border-border_color border-solid  border-b-2 border-l-2 border-r-2 border-t-2   h-14  pl-4 pt-3 ">
        <h4 className="text-xl  col-span-1 font-bold w-96 text-black  pt-0">
          Parcours Académique n {index + 1}
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
            onClick={() =>  setActiveIndex(index)}
          />
        </div>
      </div>
      {activeIndex === index ? (
        <div className="  pt-5 overflow-visible opacity-100 h-full  border-border_color -mt-5 pb-8 w-full  pl-8 pr-10 border-l-2  border-r-2  border-b-2 ">
          <div className="flex  space-x-5">
            <div className="w-1/2">
              <div className="flex space-x-5">
                <div className="w-11/12">
                  <h6 className="text-black text-lg"> Date de début*</h6>
                  <Field
                    type="date"
                    onChange={handleChange}
                    name={namespace + `.education.${index}.startDate`}
                    placeholder="ex : 20/05/2023"
                    className="bg-panel  mt-4 rounded-md pt-2 pb-2  pl-2 sm:max-w-sm   border-solid border w-full border-barckground_textarea"
                  />
                </div>
                <div className="w-11/12">
                  <h6 className="text-black text-lg">Date de fin*</h6>
                  <Field
                    type="date"
                    onChange={handleChange}
                    name={namespace + `.education.${index}.endDate`}
                    placeholder="ex : 20/06/2023"
                    className="bg-panel  mt-4 rounded-md pt-2 pb-2  pl-2   border-solid border w-full border-barckground_textarea"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h6 className="text-black  text-lg">Nom de l'école*</h6>
              <Field
                type="text"
                onChange={handleChange}
                name={namespace + `.education.${index}.nomDeLecole`}
                placeholder=" ex : EPI"
                className="bg-panel rounded-md  mt-4 pt-2 pb-2 pl-2 w-full   border-solid border   border-barckground_textarea"
              />
              <Error name={namespace + `.education.${index}.nomDeLecole`} />
            </div>
          </div>
          <h5 className="text-red   mt-2 ">{errorDate}</h5>
          <div className="flex  space-x-5">
            <div className="w-1/2  ">
              <h6 className="text-black text-lg">Nom du diplôme*</h6>
              <Field
                type="text"
                onChange={handleChange}
                name={namespace + `.education.${index}.nomDuDiplome`}
                placeholder="ex : Diplome Nationale d ingenieur National"
                className="bg-panel  mt-4 rounded-md pt-2 pb-2  pl-2   border-solid border w-full border-barckground_textarea"
              />
              <Error name={namespace + `.education.${index}.nomDuDiplome`} />
            </div>
            <div className="w-1/2  ">
              <h6 className="text-black  text-lg">Lieu</h6>
              <Field
                type="text"
                onChange={handleChange}
                name={namespace + `.education.${index}.Lieu`}
                placeholder=" ex : Sousse"
                className="bg-panel rounded-md  mt-4 pt-2 pb-2 pl-2 w-full  border-solid border   border-barckground_textarea"
              />
              <Error name={namespace + `.education.${index}.Lieu`} />
            </div>
          </div>
          <div className="flex ">
            <div className="w-full mt-4">
              <h6 className="text-black text-lg   ">Détail</h6>
              <MyTextField
                as="textarea"
                maxLength="600"
                onChange={handleChange}
                name={namespace + `.education.${index}.detail`}
                className="bg-barckground_textarea rounded-md pt-2 pl-2 pb-16   mt-4  w-full  border-solid border border-barckground_textarea "
              />
              <Error name={namespace + `.education.${index}.detail`} />
            </div>
          </div>
          <h5 className="text-red mt-2">{error}</h5>
        </div>
      ) : null}
    </div>
  );
};

export default ParcoursAcadémqueItems;
