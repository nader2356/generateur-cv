import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";

import { base64OfImage } from "../Component/Base64OfImage";


const getBase64 = (file) => {
  return new Promise((resolve) => {
    let baseURL = "";
    // Make new FileReader
    let reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};

const PersonalInfo = ({
  handleChangePersonalInfo,
  Active,
  setActive,
  Titre,
  formValuesOPersonalInfo,
  formErrorPersonalInfo,
  validatePersonalInfo,
}) => {
  const [uploadType] = useState("local");
  const error = validatePersonalInfo(formValuesOPersonalInfo);

  return (
    <div className="w-11/12 ml-1  border-border_color border-r-2       border-l-2  ">
      <div className="flex flex-row  justify-between  bg-panel  pt-3 h-14 border-t-2 pl-4 border-border_color border-solid  ">
        <h4 className="text-xl font-bold text-[#38383d] pt-0">
          Informations Personelles
        </h4>
        <RightOutlined
          className="pt-2 pr-3 cursor-pointer "
          onClick={() => setActive(Titre)}
        />
      </div>
      {Active === Titre && (
        <>
          <div className="ml-8  bg-white pt-4   flex ">
            <div className="w-11/12">
              <div className="flex ">
                <div className=" w-full">
                  <h6 className="text-black text-lg font-normal ml-1">Nom*</h6>
                  <input
                    name="nom"
                    type="text"
                    value={formValuesOPersonalInfo.nom}
                    className="bg-panel rounded-md pt-2 pb-2 mt-4 -mb-0  pl-2 border-solid border  w-full border-barckground_textarea"
                    onChange={handleChangePersonalInfo}
                    placeholder=" ex : Nader"
                  />
                  <h5 className="text-red text-sm   mt-2">
                    {formErrorPersonalInfo.nom}
                  </h5>
                </div>

                <div className="w-full space-x-1 ml-3  ">
                  <h6 className="text-black text-lg font-normal  ml-1">
                    Prenom*
                  </h6>
                  <input
                    type="text"
                    name="prenom"
                    value={formValuesOPersonalInfo.prenom}
                    className="bg-panel rounded-md pt-2 pb-2 mt-4 pl-2 -mb-0  w-full border-solid border  border-barckground_textarea"
                    onChange={handleChangePersonalInfo}
                    placeholder="ex : Abdessaied"
                  />
                  <h5 className="text-red text-sm   mt-2">
                    {formErrorPersonalInfo.prenom}
                  </h5>
                </div>

                <div className="w-full  space-x-8 ">
                  <h6 className="text-black text-lg font-normal ml-8">
                    Email*
                  </h6>
                  <input
                    type="text"
                    name="email"
                    value={formValuesOPersonalInfo.email}
                    className="bg-panel rounded-md pt-2 pb-2 mt-4 pl-2 -mb-0  w-full border-solid border  border-barckground_textarea"
                    onChange={handleChangePersonalInfo}
                    placeholder="ex : naderabdessaied8@gmail.com"
                  />
                  <h5 className="text-red text-sm   mt-2">
                    {formErrorPersonalInfo.email}
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-8  bg-white pt-4   flex ">
            <div className="w-11/12">
              <div className="flex ">
                <div className=" w-full">
                  <h6 className="text-black text-lg font-normal ml-1">
                    Adresse*
                  </h6>
                  <input
                    name="adresse"
                    value={formValuesOPersonalInfo.adresse}
                    type="text"
                    className="bg-panel rounded-md pt-2 pb-2 mt-4 -mb-0  pl-2 border-solid border  w-full border-barckground_textarea"
                    onChange={handleChangePersonalInfo}
                    placeholder=" ex : Sahloul1, Rue Louis marlouf"
                  />
                  <h5 className="text-red text-sm   mt-2">
                    {formErrorPersonalInfo.adresse}
                  </h5>
                </div>

                <div className="w-full space-x-1 ml-3  ">
                  <h6 className="text-black text-lg font-normal ml-1">Git*</h6>
                  <input
                    type="text"
                    value={formValuesOPersonalInfo.git}
                    name="git"
                    className="bg-panel rounded-md pt-2 pb-2 mt-4 pl-2 -mb-0  w-full border-solid border  border-barckground_textarea"
                    onChange={handleChangePersonalInfo}
                    placeholder="ex :https://github.com/nader2356"
                  />
                  <h5 className="text-red text-sm   mt-2">
                    {formErrorPersonalInfo.git}
                  </h5>
                </div>

                <div className="w-full  space-x-8 ">
                  <h6 className="text-black text-lg font-normal ml-8">
                    Telephone*
                  </h6>
                  <input
                    type="text"
                    value={formValuesOPersonalInfo.phone}
                    name="phone"
                    className="bg-panel rounded-md pt-2 pb-2 mt-4 pl-2 -mb-0 w-full border-solid border  border-barckground_textarea"
                    onChange={handleChangePersonalInfo}
                    placeholder="ex : +216 50 409 085"
                  />
                  <h5 className="text-red text-sm   mt-2">
                    {formErrorPersonalInfo.phone}
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="w-96   ml-8">
            <h6 className="text-black text-lg font-normal mt-4">Photo</h6>

            {uploadType === "local" && (
              <input
                type="file"
                className="bg-panel rounded-md pt-2 pb-2  mb-5 mt-4 pl-2  w-full border-solid border border-barckground_textarea"
                accept=".jpg, .jpeg, .png"
                id="myFile"
                value={"" ? formValuesOPersonalInfo.photo === `${base64OfImage}` : undefined}
                name="photo"
                onChange={(e) => {
                  let file = e.target.files.item(0);
                  getBase64(file)
                    .then((result) => {
                      if (result) {
                        formValuesOPersonalInfo.photo = result;
                      }
                    })
                    .catch((err) => {});
                }}
              />
            )}
            <h5 className="text-red text-sm   mt-2">
              {formErrorPersonalInfo.photo}
            </h5>
          </div>

          <div className="flex justify-end">
            <button
              className=" text-sm font-medium h-10  mr-10   rounded-md border border-transparent text-white bg-black  focus:outline-none 
                            focus:ring-2 focus:ring-offset-2 mt-3  mb-4  w-32 "
              onClick={() => {
                if (
                  error.nom === "Obligatoire" ||
                  error.prenom === "Obligatoire" ||
                  error.adresse === "Obligatoire" ||
                  error.git === "Obligatoire" ||
                  error.email === "Obligatoire" ||
                  error.phone === "Obligatoire"
                ) {
                  setActive("Informations Personnelles");
                } else {
                  setActive("Parcours Académique");
                }
              }}
            >
              suivant{" "}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalInfo;
