import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
const ExperienceProfessionnelleItems = ({
  index,
  formValuesOExperiencesProfessionelles,
  setformValuesOExperiencesProfessionelles,
  setActiveIndex,
  activeIndex,
  message,
  exp,
  limit,
}) => {
  const [isLimitDetail, setIsLimitDetail] = useState(false);
  const [charCountDetail, setCharCountDetail] = useState(0)

  useEffect(() => {
    setIsLimitDetail(charCountDetail >= limit);
    setActiveIndex(index);
    setformValuesOExperiencesProfessionelles(formValuesOExperiencesProfessionelles)
  }, [charCountDetail, formValuesOExperiencesProfessionelles, index, limit, setActiveIndex, setformValuesOExperiencesProfessionelles]);

  const onHandle = (e, i) => {
    const { name, value } = e.target;

    let newForm = [...formValuesOExperiencesProfessionelles];
    if (e.target.name === "detail") {
      setCharCountDetail(e.target.value.length);
    }
    newForm[i][name] = value;
    setformValuesOExperiencesProfessionelles(newForm);
  };
  const onRemove = (i) => {
    const newForm = [...formValuesOExperiencesProfessionelles];
    newForm.splice(i);
    setformValuesOExperiencesProfessionelles(newForm);
  };

  return (
    <div className="  pl-4 pr-4 mt-2 container " key={index}>
      <div className="grid grid-cols-3   bg-panel mt-5 mb-5  border-border_color border-solid  border-b-2 border-l-2 border-r-2 border-t-2   h-14  pl-4 pt-3 ">
        <h4 className="text-xl  col-span-1 font-bold w-96 text-black  pt-0">
          Expérience Professionnelle n {index + 1}
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
        <div className="   pt-5 overflow-visible opacity-100 h-full   border-border_color -mt-5 pb-8  max-w-screen  pl-8 pr-10 border-l-2  border-r-2  border-b-2 ">
          <div className="flex  space-x-5">
            <div className="w-1/2 mb-2">
              <div className="flex space-x-4">
                <div className="w-11/12">
                  <h6 className="text-black text-lg"> Date de début*</h6>
                  <input
                    type="date"
                    onChange={(e) => onHandle(e, index)}
                    name="startDate"
                    value={exp.startDate}
                    placeholder="ex : 20/05/2023"
                    className="bg-panel  mt-4 rounded-md pt-2 pb-2  pl-2 mb-2  border-solid border w-full border-barckground_textarea"
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
                    value={exp.endDate}
                    placeholder="ex : 20/06/2023"
                    className="bg-panel  mt-4 rounded-md pt-2 pb-2  pl-2   mb-2  border-solid border w-full border-barckground_textarea"
                  />
                  <h5 className="text-red  mb-2  text-sm  ">
                    {message.length - 1 >= index && message[index].endDate}
                  </h5>
                </div>
              </div>
            </div>

            <div className="w-1/2 mb-2">
              <div className="w-full space-x-0">
                <h6 className="text-black  text-lg  ml-1">
                  nom de l entreprise *
                </h6>
                <input
                  type="text"
                  onChange={(e) => onHandle(e, index)}
                  name="nomDulEntreprise"
                  value={exp.nomDulEntreprise}
                  placeholder=" ex : Proxym"
                  className="bg-panel rounded-md  mt-4  -ml-3 pt-2 pb-2 pl-2 w-full mb-2   border-solid border   border-barckground_textarea"
                />
                <h5 className="text-red  mb-2  text-sm  ">
                  {message.length - 1 >= index &&
                    message[index].nomDulEntreprise}{" "}
                </h5>
              </div>
            </div>
          </div>
          <h5 className="text-red  mb-2  text-sm  ">
            {" "}
            {message.length - 1 >= index && message[index].testDate}
          </h5>
          <div className="flex  space-x-5">
            <div className="w-1/2 ">
              <h6 className="text-black text-lg">Type d’emploi*</h6>
              <select
                onChange={(e) => onHandle(e, index)}
                name="typeDEmploi"
                value={exp.typeDEmploi}
                className=" border border-gray bg-panel  mt-3  text-gray-900 text-sm rounded-lg mb-2  block w-full p-2.5"
              >
                <option>Choisir un type d’emploi</option>
                <option value="Freelance">Freelance</option>
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="DMission">Mission</option>
              </select>
              <h5 className="text-red  mb-2  text-sm  ">
                {message.length - 1 >= index && message[index].typeDEmploi}{" "}
              </h5>
            </div>
            <div className="w-1/2 ">
              <h6 className="text-black  text-lg">Lieu*</h6>
              <input
                type="text"
                onChange={(e) => onHandle(e, index)}
                name="lieu"
                value={exp.lieu}
                placeholder=" ex : Sousse"
                className="bg-panel rounded-md  mt-4 pt-2 pb-2 pl-2 w-full mb-2 border-solid border   border-barckground_textarea"
              />
              <h5 className="text-red  mb-2  text-sm  ">
                {message.length - 1 >= index && message[index].lieu}{" "}
              </h5>
            </div>
          </div>
          <div className="flex ">
            <div className="w-full mt-4">
              <h6 className="text-black text-lg   ">Détail*</h6>
              <textarea
                maxLength="600"
                value={exp.detail}
                onChange={(e) => onHandle(e, index)}
                name="detail"
                className="bg-barckground_textarea rounded-md pt-2 pl-2 pb-16   mt-4    w-full  border-solid border border-barckground_textarea "
              />
              <div
                className={`${
                  isLimitDetail
                    ? "flex justify-end text-red"
                    : "flex justify-end "
                }`}
              >
                {charCountDetail} / {limit}
              </div>
              <h5 className="text-red  mb-2  text-sm  ">
                {message.length - 1 >= index && message[index].detail}{" "}
              </h5>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ExperienceProfessionnelleItems;
