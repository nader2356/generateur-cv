import { useEffect } from "react";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";

const ParcoursAcadémqueItems = ({
  index,
  setActiveIndex,
  activeIndex,
  formValuesOParcourAcademique,
  setformValuesOParcourAcademique,
  education,
  message,
}) => {
  useEffect(() => {
    setActiveIndex(index); 
    setformValuesOParcourAcademique(formValuesOParcourAcademique)
  }, [formValuesOParcourAcademique, index, setActiveIndex, setformValuesOParcourAcademique]);

  const onHandle = (e, i) => {
    const { name, value } = e.target;
    let newForm = [...formValuesOParcourAcademique];
    newForm[i][name] = value;
    setformValuesOParcourAcademique(newForm)
    
  };
  const onRemove = (i) => {
    const newForm = [...formValuesOParcourAcademique];
    newForm.splice(i);
    setformValuesOParcourAcademique(newForm);
    
  };


  return (
    <div className="   pl-4 pr-4 mt-2 container ">
      <div className="grid grid-cols-3   bg-panel mt-5 mb-5  border-border_color border-solid  border-b-2 border-l-2 border-r-2 border-t-2   h-14  pl-4 pt-3 ">
        <h4 className="text-xl  col-span-1 font-bold w-96 text-black  pt-0">
          Parcours Académique n {index + 1}
        </h4>
        <div className="col-span-2 text-right">
          <CloseCircleOutlined
            className={
              index === 0 ? "hidden" : "text-red text-24px mt-1 mr-5  "
            }
            onClick={() => onRemove(index)}
          />
          <RightOutlined
            className="pt-2 pr-3 cursor-pointer "
            onClick={() => setActiveIndex(index)}
          />
        </div>
      </div>
      {activeIndex === index ? (
        <div className="  pt-5 overflow-visible opacity-100 h-full  border-border_color -mt-5 pb-8    pl-4 pr-10 border-l-2  border-r-2  border-b-2 ">
          <div className="flex  space-x-5">
            <div className="w-1/2 mb-2">
              <div className="flex space-x-5">
                <div className="w-11/12">
                  <h6 className="text-black text-lg"> Date de début*</h6>
                  <input
                    type="date"
                    onChange={(e) => onHandle(e, index)}
                    name="startDate"
                    placeholder="ex : 20/05/2023"
                    value={education.startDate}
                    className="bg-panel  mt-4 rounded-md pt-2 pb-2  pl-2 sm:max-w-sm   border-solid border w-full border-barckground_textarea"
                  />
                  <h5 className="text-red  mb-2  text-sm  ">
                    {message.length - 1 >= index && message[index].startDate}
                  </h5>
                </div>
                <div className="w-11/12">
                  <h6 className="text-black text-lg">Date de fin*</h6>
                  <input
                    type="date"
                    onChange={(e) => onHandle(e, index)}
                    name="endDate"
                    value={education.endDate}
                    placeholder="ex : 20/06/2023"
                    className="bg-panel  mt-4 rounded-md pt-2 pb-2  pl-2   border-solid border w-full border-barckground_textarea"
                  />
                  <h5 className="text-red  mb-2  text-sm  ">
                    {message.length - 1 >= index && message[index].endDate}
                  </h5>
                </div>
              </div>
            </div>
            <div className="w-1/2 mb-2">
              <h6 className="text-black  text-lg">Nom de l'école*</h6>
              <input
                type="text"
                onChange={(e) => onHandle(e, index)}
                name="nomDeLecole"
                placeholder=" ex : EPI"
                value={education.nomDeLecole}
                className="bg-panel rounded-md  mt-4 pt-2 pb-2 pl-2 w-full mb-2  border-solid border   border-barckground_textarea"
              />
              <h5 className="text-red  mb-2  text-sm  ">
                {message.length - 1 >= index && message[index].nomDeLecole}
              </h5>
            </div>
          </div>
          <h5 className="text-red  mb-2  text-sm  ">
            {message.length - 1 >= index && message[index].testDate}
          </h5>
          <div className="flex  space-x-5">
            <div className="w-1/2  ">
              <h6 className="text-black text-lg">Nom du diplôme*</h6>
              <input
                type="text"
                onChange={(e) => onHandle(e, index)}
                name="nomDuDiplome"
                value={education.nomDuDiplome}
                placeholder="ex : Diplome Nationale d ingenieur National"
                className="bg-panel  mt-4 rounded-md pt-2 pb-2  pl-2 mb-2  border-solid border w-full border-barckground_textarea"
              />
              <span className="text-red text-sm ">
                {message.length - 1 >= index && message[index].nomDuDiplome}
              </span>
            </div>
            <div className="w-1/2  ">
              <h6 className="text-black  text-lg">Lieu*</h6>
              <input
                type="text"
                onChange={(e) => onHandle(e, index)}
                name="Lieu"
                value={education.Lieu}
                placeholder=" ex : Sousse"
                className="bg-panel rounded-md  mt-4 pt-2 pb-2 pl-2 w-full  mb-2 border-solid border   border-barckground_textarea"
              />
              <span className="text-red text-sm ">
                {message.length - 1 >= index && message[index].Lieu}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ParcoursAcadémqueItems;
