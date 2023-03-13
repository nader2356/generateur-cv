import { RightOutlined } from "@ant-design/icons";
import { useEffect } from "react";
const Profil = ({
  handleChangeProfile,
  Active,
  setActive,
  Titre,
  formValuesOProfile,
  formErrors,
  charCount,
  isLimit,
  limit,
  validateProfile,
  setIsLimit
}) => {
  const error = validateProfile(formValuesOProfile);
  useEffect(() => {
    setIsLimit(charCount >= limit);
  }, [charCount, limit, setIsLimit]);

  return (
    <div className="w-11/12 ml-1  border-border_color border-r-2    border-l-2 ">
      <div className="flex flex-row  justify-between  bg-panel border-t-2 border-border_color border-solid    pt-3 h-14  pl-4  ">
        <h4 className="text-xl font-bold text-black pt-0">{Titre}</h4>
        <RightOutlined
          className="pt-2 pr-3 cursor-pointer "
          onClick={() => setActive(Titre)}
        />
      </div>
      {Active === Titre ? (
        <>
          <div className="ml-4  bg-white    flex flex-wrap justify-between">
            <div className="w-full mr-5 pt-8">
              <h6 className="text-black text-lg font-normal pb-4">Poste*</h6>
              <input
                type="text"
                onChange={handleChangeProfile}
                value={formValuesOProfile.poste}
                name="poste"
                placeholder=" ex : Ingenieur"
                className="bg-panel rounded-md pt-2 pb-2  pl-2 w-full   border-solid border border-barckground_textarea"
              />
              <h5 className="text-red text-sm   mt-2">{formErrors.poste}</h5>
            </div>

            <div className="w-full  mr-5 ">
              <h6 className="text-black text-lg font-normal mb-2 mt-4">
                Description*
              </h6>
              <textarea
                maxLength="600"
                value={formValuesOProfile.description}
                onChange={handleChangeProfile}
                name="description"
                className="bg-barckground_textarea rounded-md pt-2 pl-2 pb-16   mt-4    w-full  border-solid border border-barckground_textarea "
              />
              <div
                className={`${
                  isLimit ? "flex justify-end text-red" : "flex justify-end "
                }`}
              >
                {charCount} / {limit}
              </div>
              <h5 className="text-red text-sm   ">{formErrors.description}</h5>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className=" items-center text-sm font-medium h-10  mr-10 mt-10 mb-5   rounded-md border border-transparent text-white bg-black  focus:outline-none 
                            focus:ring-2 focus:ring-offset-2   w-32  "
              onClick={() => {
                if (error.poste === "Obligatoire" || error.description === "Obligatoire") {
                  setActive("Profil")
                } else {
                  setActive("Informations Personnelles");
                }
              }}
            >
              suivant{" "}
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Profil;
