import { useState, useEffect } from "react";
import ExperienceProfessionnelle from "../Section/ExperienceProfessionnelle";
import ParcourAcademique from "../Section/ParcourAcademique";
import PersonalInfo from "../Section/PersonalInfo";
import Profil from "../Section/Profil";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { getDocumentDefinition } from "../Resume/Resume";
import { base64OfImage } from "../Component/Base64OfImage";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const MainForm = () => {
  const InitialStateProfil = {
    poste: "",
    description: "",
  };
  const InitialStatePersonalInfo = {
    prenom: "",
    photo: "",
    email: "",
    phone: "",
    git: "",
    adresse: "",
    nom: "",
  };

  const InitialStateExperienceProfessionelles = [
    {
      typeDEmploi: "",
      lieu: "",
      nomDulEntreprise: "",
      startDate: "",
      endDate: "",
      detail: "",
    },
  ];
  const InitialStateParcourAcademique = [
    {
      nomDuDiplome: "",
      Lieu: "",
      nomDeLecole: "",
      startDate: "",
      endDate: "",
    },
  ];

  const [formValuesOProfile, setFormValuesOfProfile] =
    useState(InitialStateProfil);
  const [formValuesOPersonalInfo, setFormValuesOfPersonalInfo] = useState(
    InitialStatePersonalInfo
  );

  const limit = 600;
  const [charCount, setCharCount] = useState(
    formValuesOProfile.description.length
  );
  const [isLimit, setIsLimit] = useState(false);

  const [
    formValuesOExperiencesProfessionelles,
    setformValuesOExperiencesProfessionelles,
  ] = useState(InitialStateExperienceProfessionelles);

  const [active, setActive] = useState("Profil");
  const [download, setdownload] = useState(false);
  const [initialiser, setInitialiser] = useState(false);
  const [save, setSave] = useState(true);
  const [formErrors, setFormProfileErrors] = useState({});
  const [formErrorPersonalInfo, setFormPeronalInfoErrors] = useState({});

  const [formValuesOParcourAcademique, setformValuesOParcourAcademique] =
    useState(InitialStateParcourAcademique);

  useEffect(() => {
    setIsLimit(charCount >= limit);
  }, [charCount]);

  const handleChangeProfile = (e) => {
    const { name, value } = e.target;
    setFormValuesOfProfile({ ...formValuesOProfile, [name]: value });
    setFormProfileErrors(validateProfile(formValuesOProfile));
  };

  const handleChangePersonalInfo = (e) => {
    const { name, value } = e.target;
    setFormValuesOfPersonalInfo({ ...formValuesOPersonalInfo, [name]: value });
    setFormPeronalInfoErrors(validatePersonalInfo(formValuesOPersonalInfo));
  };

  const validateProfile = (values) => {
    const errors = {};

    if (!values.poste) {
      errors.poste = "Obligatoire";
    }
    if (!values.description) {
      errors.description = "Obligatoire";
    }

    return errors;
  };

  const validatePersonalInfo = (values) => {
    const errors = {};

    const regex =
      // eslint-disable-next-line
      /[https://[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,4}(\/[a-zA-Z0-9]{4,9})*/g;

    if (!values.prenom) {
      errors.prenom = "Obligatoire";
    }
    if (!values.nom) {
      errors.nom = "Obligatoire";
    }
    if (!values.email) {
      errors.email = "Obligatoire";
    }

    if (!values.adresse) {
      errors.adresse = "Obligatoire";
    }

    if (!values.git) {
      errors.git = "Obligatoire";
    } else if (!regex.test(values.git)) {
      errors.git = " n est pas a valid git!";
    }

    if (!values.phone) {
      errors.phone = "Obligatoire";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormProfileErrors(validateProfile(formValuesOProfile));
    setFormPeronalInfoErrors(validatePersonalInfo(formValuesOPersonalInfo));
    const messageDErrorOfProfile = validateProfile(formValuesOProfile);
    const messageDErrorOfPersonalInfo = validatePersonalInfo(formValuesOPersonalInfo);

    if (
      messageDErrorOfProfile.poste === "Obligatoire" ||
      messageDErrorOfProfile.description === "Obligatoire" ||
      messageDErrorOfPersonalInfo.nom === "Obligatoire" ||
      messageDErrorOfPersonalInfo.prenom === "Obligatoire" ||
      messageDErrorOfPersonalInfo.git === "Obligatoire" ||
      messageDErrorOfPersonalInfo.phone === "Obligatoire" ||
      messageDErrorOfPersonalInfo.adresse === "Obligatoire" ||
      messageDErrorOfPersonalInfo.email === "Obligatoire"
    ) {
      setdownload(false);
      setInitialiser(false);
    } else {
      setdownload(true);
      setInitialiser(true);
    }
  };

  const downloadPdf = () => {
    const documentDefinition = getDocumentDefinition(
      formValuesOProfile,
      formValuesOPersonalInfo,
      formValuesOParcourAcademique,
      formValuesOExperiencesProfessionelles
    );
    pdfMake.createPdf(documentDefinition).open();
    //pdfMake.createPdf(docDefinition).open();
  };

  const initialiserform = () => {
    setFormValuesOfProfile(InitialStateProfil);
    setFormValuesOfPersonalInfo(InitialStatePersonalInfo);
    setformValuesOParcourAcademique(InitialStateParcourAcademique);
    setformValuesOExperiencesProfessionelles(
      InitialStateExperienceProfessionelles
    );
    setCharCount(InitialStateProfil.description.length);
    setInitialiser(false);
    setdownload(false);
    setSave(true);
  };

  return (
    <div className="flex  flex-col justify-center items-center    mt-16 lg:ml-20 bg-white ">
      <div className="mb-16 ml-800px  min-w-max min-h-max   sm:mx-auto sm:w-full sm:max-w-7xl">
        <form onSubmit={handleSubmit}>
          <Profil
            handleChangeProfile={handleChangeProfile}
            formErrors={formErrors}
            formValuesOProfile={formValuesOProfile}
            setActive={setActive}
            Active={active}
            Titre="Profil"
            isLimit={isLimit}
            charCount={charCount}
            validateProfile={validateProfile}
            limit={limit}
          />

          <PersonalInfo
            formValuesOPersonalInfo={formValuesOPersonalInfo}
            formErrorPersonalInfo={formErrorPersonalInfo}
            setFormValuesOfPersonalInfo={setFormValuesOfPersonalInfo}
            handleChangePersonalInfo={handleChangePersonalInfo}
            setActive={setActive}
            validatePersonalInfo={validatePersonalInfo}
            Active={active}
            Titre="Informations Personnelles"
          />
          <ParcourAcademique
            formValuesOParcourAcademique={formValuesOParcourAcademique}
            setformValuesOParcourAcademique={setformValuesOParcourAcademique}
            Titre="Parcours Académique"
            setActive={setActive}
            Active={active}
            isLimit={isLimit}
            charCount={charCount}
            limit={limit}
          />
          <ExperienceProfessionnelle
            formValuesOExperiencesProfessionelles={
              formValuesOExperiencesProfessionelles
            }
            setformValuesOExperiencesProfessionelles={
              setformValuesOExperiencesProfessionelles
            }
            Titre="Expériences Professionnelles"
            setActive={setActive}
            Active={active}
            limit={limit}
          />

          <div className="flex w-11/12  justify-center mt-8 ">
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
};

export default MainForm;
