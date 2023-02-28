/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import * as Yup from "yup";

import { Field } from "formik";
import { RightOutlined } from "@ant-design/icons";
import { Error } from "../Component/Error";


export const userValidationSchema = Yup.object().shape({
  prenom: Yup.string().required(" Obligatoire"),
  email: Yup.string().required("  Obligatoire").email(" valid email"),
  nom: Yup.string().required(" Obligatoire"),
  adresse: Yup.string().required(" Obligatoire"),
  phone: Yup.string().required(" Obligatoire"),
  git: Yup.string()
    .required(" Obligatoire")
    .matches(
      /[https://[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,4}(\/[a-zA-Z0-9]{4,9})*/g,
      "le lien doit etre valid"
    ),
});

export const userInitialValues = {
  prenom: "",
  photo: "",
  email: "",
  phone: "",
  git: "",
  adresse: "",
  nom: "",
};

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
  handleChange,
  namespace,
  setFieldValue,
  setActive,
  Active,
  Titre,
}) => {
  const [uploadType] = useState("local");

  return (
    <div className="w-11/12 ml-1  border-border_color border-r-2      border-l-2  ">
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
                  <h6 className="text-black text-lg font-normal ml-1">Nom</h6>
                  <Field
                    name={namespace + ".nom"}
                    type="text"
                    className="bg-panel rounded-md pt-2 pb-2 mt-4 -mb-0  pl-2 border-solid border  w-full border-barckground_textarea"
                    onChange={handleChange}
                    placeholder=" ex : Nader"
                  />
                  <Error name={namespace + ".nom"}></Error>
                </div>

                <div className="w-full space-x-1 ml-3  ">
                  <h6 className="text-black text-lg font-normal  ml-1">Prenom</h6>
                  <Field
                    type="text"
                    name={namespace + ".prenom"}
                    className="bg-panel rounded-md pt-2 pb-2 mt-4 pl-2 -mb-0  w-full border-solid border  border-barckground_textarea"
                    onChange={handleChange}
                    placeholder="ex : Abdessaied"
                  />
                  <Error name={namespace + ".prenom"}></Error>
                </div>

                <div className="w-full  space-x-8 ">
                  <h6 className="text-black text-lg font-normal ml-8">Email</h6>
                  <Field
                    type="text"
                    name={namespace + ".email"}
                    className="bg-panel rounded-md pt-2 pb-2 mt-4 pl-2 -mb-0  w-full border-solid border  border-barckground_textarea"
                    onChange={handleChange}
                    placeholder="ex : naderabdessaied8@gmail.com"
                  />
                  <Error name={namespace + ".email"}></Error>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-8  bg-white pt-4   flex ">
            <div className="w-11/12">
              <div className="flex ">
                <div className=" w-full">
                  <h6 className="text-black text-lg font-normal ml-1">Adresse</h6>
                  <Field
                    name={namespace + ".adresse"}
                    type="text"
                    className="bg-panel rounded-md pt-2 pb-2 mt-4 -mb-0  pl-2 border-solid border  w-full border-barckground_textarea"
                    onChange={handleChange}
                    placeholder=" ex : Sahloul1, Rue Louis marlouf"
                  />
                  <Error name={namespace + ".adresse"}></Error>
                </div>

                <div className="w-full space-x-1 ml-3  ">
                  <h6 className="text-black text-lg font-normal ml-1">Git</h6>
                  <Field
                    type="text"
                    name={namespace + ".git"}
                    className="bg-panel rounded-md pt-2 pb-2 mt-4 pl-2 -mb-0  w-full border-solid border  border-barckground_textarea"
                    onChange={handleChange}
                    placeholder="ex :https://github.com/nader2356"
                  />
                  <Error name={namespace + ".git"}></Error>
                </div>

                <div className="w-full  space-x-8 ">
                  <h6 className="text-black text-lg font-normal ml-8">Telephone</h6>
                  <Field
                    type="text"
                    name={namespace + ".phone"}
                    className="bg-panel rounded-md pt-2 pb-2 mt-4 pl-2 -mb-0 w-full border-solid border  border-barckground_textarea"
                    onChange={handleChange}
                    placeholder="ex : +216 50 409 085"
                  />
                  <Error name={namespace + ".phone"}></Error>
                </div>
              </div>
            </div>
          </div>

         

          <div className="w-96   ml-8">
            <h6 className="text-black text-lg font-normal mt-4">Photo</h6>

            {uploadType === "local" && (
              <Field
                type="file"
                className="bg-panel rounded-md pt-2 pb-2  mb-5 mt-4 pl-2  w-11/12 border-solid border border-barckground_textarea"
                accept=".jpg, .jpeg, .png"
                name={namespace + ".picture"}
                onChange={(e) => {
                  let file = e.target.files.item(0);
                  console.log(file);
                  getBase64(file)
                    .then((result) => {
                      if (result) {
                        setFieldValue(namespace + ".photo", result);
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              />
            )}
            <Error name={namespace + ".photo"}></Error>
          </div>

          <div className="flex justify-end">
            <button
              className=" text-sm font-medium h-10  mr-10   rounded-md border border-transparent text-white bg-black  focus:outline-none 
                            focus:ring-2 focus:ring-offset-2 mt-3  mb-4  w-32 "
              onClick={() => setActive("Parcours Académique")}
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
