import { Field } from "formik";
import { RightOutlined } from "@ant-design/icons";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Error } from "../Component/Error";


const ParcourAcademiqueList = ({
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
  
    fontSize: '25px',
    marginTop : 5,
    color: "#cf5454"
  };

  return (
    <>
      <div class="flex  w-11/12 h-full ml-14 mt-2 ">
        <div class="flex flex-row justify-between md:w-full bg-panel mt-5 mb-5  border-border_color border-solid  border-b-2 border-l-2 border-r-2 border-t-2   h-14  pl-4 pt-3 ">
          <h4 className="text-xl font-bold text-black  pt-0">
            Parcour Academique n {index + 1}
          </h4>
          <CloseCircleOutlined style={Style} onClick={() => arrayHelpers.remove(index)} />
         

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
                name={namespace + `.education.${index}.startDate`}
                onChange={handleChange}
              />
                  
               
              
              <h5 className="text-red ">{errorDate}</h5>
              <Error  name={namespace + `.education.${index}.startDate`} />
              
            </div>

            <div className="w-2/4 pl-12 ">
              <h6 className="text-black  text-lg">Date de fin</h6>
              <Field
                type="date"
                className="  mt-4 bg-panel rounded-md pt-2 pb-2  pl-2 border-solid border border-barckground_textarea w-full"
                name={namespace + `.education.${index}.endDate`}
                onChange={handleChange}
              />
                 <Error  name={namespace + `.education.${index}.endDate`} />
            </div>

            <div className="w-2/4">
              <h6 className="text-black text-lg">Nom du diplôme*</h6>
              <Field
                type="text"
                onChange={handleChange}
                name={namespace + `.education.${index}.nomDuDiplome`}
                placeholder="ex : Diplome Nationale d ingenieur National"
                className="bg-panel  mt-4 rounded-md pt-2 pb-2  pl-2   border-solid border w-full border-barckground_textarea"
              />
              <Error  name={namespace + `.education.${index}.nomDuDiplome`} />
            </div>
            <div className="w-1/2 pl-12">
              <h6 className="text-black  text-lg">Nom de l'école*</h6>
              <Field
                type="text"
                onChange={handleChange}
                name={namespace + `.education.${index}.nomDeLecole`}
                placeholder=" ex : EPI"
                className="bg-panel   mt-4 rounded-md pt-2 pb-2 pl-2 border-solid border   w-full border-barckground_textarea"
              />
       <Error  name={namespace + `.education.${index}.nomDeLecole`} />
            </div>

            <div className="w-1/2   ">
              <h6 className="text-black  text-lg">Lieu</h6>
              <Field
                type="text"
                onChange={handleChange}
                name={namespace + `.education.${index}.Lieu`}
                placeholder=" ex : Sousse"
                className="bg-panel rounded-md  mt-4 pt-2 pb-2 pl-2  border-solid border w-full  border-barckground_textarea"
              />
 <Error  name={namespace + `.education.${index}.Lieu`} />
            </div>
            <div className="w-1/2   ">
              <h6 className="text-black text-lg   pl-12">Détail</h6>
              <Field
                type="textarea"
                onChange={handleChange}
                name={namespace + `.education.${index}.detail`}
                className="bg-barckground_textarea rounded-[5px] pt-2 pl-4 pb-16  ml-12 mt-4  w-11/12  border-solid border border-barckground_textarea "
              />
              <div className="pl-12">
              <Error  name={namespace + `.education.${index}.detail`} />
              </div>
            </div>
            <h5 className="text-red    mt-8 ">{error}</h5>
          </div>
        
        </>
      )}
    </>
  );
};

export default ParcourAcademiqueList;
