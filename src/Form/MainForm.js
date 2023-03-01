import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { getDocumentDefinition } from "../Resume/Resume";
import AboutMe, {
  aboutMeInitialValues,
  aboutMeValidationSchema,
} from "../Section/AboutMe";
import ParcourAcademique, {
  educationInitial,
  educationValidationSchema,
} from "../Section/ParcourAcademique";
import PersonalInfo, {
  userInitialValues,
  userValidationSchema,
} from "../Section/PersonalInfo";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import ExperienceProfessionnelle, {
  experienceInitial,
  experienceProfessionnelleValidationSchema,
} from "../Section/ExperienceProfessionnelle";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const MainForm = () => {
  const validationSchema = Yup.object({
    aboutMe: aboutMeValidationSchema,
    infoPersonnelle: userValidationSchema,
    education: educationValidationSchema,
    experienceProfessionnelle: experienceProfessionnelleValidationSchema,
  });

  const [active, setActive] = useState("Profil");
  const [download, setdownload] = useState(false);
  const [initialiser, setInitialiser] = useState(false);
  const [save, setSave] = useState(true);
  const [reinitialiserValues, setReinitialiser] = useState(null);

  const downloadPdf = () => {
    const documentDefinition = getDocumentDefinition();
    console.log(documentDefinition);
    pdfMake.createPdf(documentDefinition).open();
  };
  const initialiserform = () => {
    setReinitialiser(mainSectionReinitialValues);
    localStorage.removeItem("about_me");
    localStorage.removeItem("personal_info");
    localStorage.removeItem("education");
    localStorage.removeItem("experience_professionelles");
    setInitialiser(false);
    setdownload(false);
    setSave(true);
  };
  const mainSectionReinitialValues = {
    aboutMe: aboutMeInitialValues,
    infoPersonnelle: userInitialValues,
    education: educationInitial,
    experienceProfessionnelle: experienceInitial,
  };

  const mainSectionInitialValues = {
    aboutMe: localStorage.getItem("about_me")
      ? JSON.parse(localStorage.getItem("about_me") || "")
      : aboutMeInitialValues,
    infoPersonnelle: localStorage.getItem("personal_info")
      ? JSON.parse(localStorage.getItem("personal_info") || "")
      : userInitialValues,
    education: localStorage.getItem("education")
      ? JSON.parse(localStorage.getItem("education") || "")
      : educationInitial,
    experienceProfessionnelle: localStorage.getItem(
      "experience_professionelles"
    )
      ? JSON.parse(localStorage.getItem("experience_professionelles") || "")
      : experienceInitial,
  };

  return (
    <div className="flex flex-col justify-center items-center md:mt-1   rounded-xl h-auto pt-14 bg-white">
      <div className="   mb-4  sm:max-w-8xl ml-11 sm:mx-auto sm:w-full  ">
        <Formik
          initialValues={mainSectionInitialValues || reinitialiserValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(values) => {
            console.log(values);
            localStorage.setItem("about_me", JSON.stringify(values.aboutMe));
            localStorage.setItem(
              "personal_info",
              JSON.stringify(values.infoPersonnelle)
            );
            localStorage.setItem("education", JSON.stringify(values.education));
            setdownload(true);
            setSave(false);
            setInitialiser(true);
            localStorage.setItem(
              "experience_professionelles",
              JSON.stringify(values.experienceProfessionnelle)
            );
          }}
        >
          {(formik) => {
            return (
              <div className="flex min-h-screen flex-col justify-center bg-white ">
                <div className="mb-auto ml-420px  sm:mx-auto sm:w-full sm:max-w-7xl">
                  <form onSubmit={formik.handleSubmit}>
                    <AboutMe
                      handleChange={formik.handleChange}
                      namespace="aboutMe"
                      values={formik.values.aboutMe}
                      setActive={setActive}
                      Active={active}
                      Titre="Profil"
                    />

                    <PersonalInfo
                      handleChange={formik.handleChange}
                      namespace="infoPersonnelle"
                      setFieldValue={formik.setFieldValue}
                      values={formik.values.infoPersonnelle}
                      setActive={setActive}
                      Active={active}
                      Titre="Informations Personnelles"
                    />
                    <ParcourAcademique
                      handleChange={formik.handleChange}
                      values={formik.values.education}
                      namespace="education"
                      Titre="Parcours Académique"
                      setActive={setActive}
                      Active={active}
                    />

                    <ExperienceProfessionnelle
                      handleChange={formik.handleChange}
                      namespace="experienceProfessionnelle"
                      values={formik.values.experienceProfessionnelle}
                      Titre="Expériences Professionnelles"
                      setActive={setActive}
                      Active={active}
                    />

                    <div className="flex w-11/12 pl-80 mt-8 ">
                      {save && (
                        <button
                          className="inline-flex items-center text-sm font-medium h-15  py-4 mr-5 rounded-md border border-transparent text-white bg-black  focus:outline-none 
                            focus:ring-2 focus:ring-offset-2   w-48 justify-center "
                          type="submit"
                        >
                          Sauvgarder
                        </button>
                      )}
                      {download && (
                        <button
                          className="inline-flex items-center text-sm font-medium h-15  py-4 mr-5 rounded-md border border-transparent text-white bg-black  focus:outline-none 
                            focus:ring-2 focus:ring-offset-2   w-48 justify-center "
                          type="button"
                          onClick={() => downloadPdf()}
                        >
                          telecharger
                        </button>
                      )}
                      {initialiser && (
                        <button
                          className="inline-flex items-center text-sm font-medium h-15  py-4 mr-5 rounded-md border border-transparent text-white bg-black  focus:outline-none 
                            focus:ring-2 focus:ring-offset-2   w-48 justify-center "
                          type="reset"
                          onClick={() => initialiserform()}
                        >
                          initialiser
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default MainForm;
