/* eslint-disable array-callback-return */
import moment from "moment";
import { base64OfImage } from "../Component/Base64OfImage";

const getProfilePicObject = (formValuesOPersonalInfo) => {
  if (formValuesOPersonalInfo.photo !== "") {
    return {
      image: formValuesOPersonalInfo.photo,
      width: 100,
      alignment: "left",
    };
  } else {
    return {
      image: `data:image/jpeg;base64,${base64OfImage}`,
      width: 100,
      alignment: "left",
    };
  }
};

const getEducationObject = (formValuesOParcourAcademique) => {
  const exs = [];
  if (formValuesOParcourAcademique) {
    formValuesOParcourAcademique.map((education) => {
      exs.push([
        {
          columns: [
            [
              {
                text: education.nomDuDiplome,
                margin: [0, 0, 0, 0],
                bold: true,
              },
              {
                text: education.nomDeLecole + "  ,  " + education.Lieu,
                margin: [0, 3, 0, 0],
                color: "#075985",
              },
            ],
            {
              text:
                moment(education.startDate).format("DD-MM-YYYY") +
                "  -  " +
                moment(education.endDate).format("DD-MM-YYYY"),
              width: "40%",
              color: "#075985",
            },
          ],
          border: [false, false, false, false],
          layout: "noBorders",
        },
      ]);
    });

    return {
      table: {
        widths: ["*"],
        body: [...exs],
      },
    };
  }

  return null;
};
const getExperienceObject = (formValuesOExperiencesProfessionelles) => {
  const exs = [];
  if (formValuesOExperiencesProfessionelles) {
    formValuesOExperiencesProfessionelles.map((experience_professionelle) => {
      exs.push([
        {
          columns: [
            [
              {
                text: experience_professionelle.typeDEmploi,

                bold: true,
                alignment: "left",
              },

              {
                text:
                  moment(experience_professionelle.startDate).format(
                    "DD-MM-YYYY"
                  ) +
                  "  -  " +
                  moment(experience_professionelle.endDate).format(
                    "DD-MM-YYYY"
                  ),
                width: "20%",
                color: "#075985",
                margin: [0, -12, 65, 0],
                alignment: "right",
              },
              {
                text:
                  experience_professionelle.nomDulEntreprise +
                  ", " +
                  experience_professionelle.lieu,
                width: "20%",

                bold: true,
                color: "#075985",
              },

              {
                columns: [
                  {
                    text: experience_professionelle.detail,
                    margin: [0, 10, 0, 0],
                    width: "100%",
                    height: "0%",
                  },
                ],
              },
            ],
          ],
          border: [false, false, false, false],
          layout: "noBorders",
        },
      ]);
    });

    return {
      table: {
        widths: ["*"],
        body: [...exs],
      },
    };
  }

  return null;
};

export const getDocumentDefinition = (
  formValuesOProfile,
  formValuesOPersonalInfo,
  formValuesOParcourAcademique,
  formValuesOExperiencesProfessionelles
) => {
  return {
    content: [
      {
        columns: [
          getProfilePicObject(formValuesOPersonalInfo),
          [
            {
              text:
                `${formValuesOPersonalInfo.nom}` +
                " " +
                `${formValuesOPersonalInfo.prenom}` +
                "  ,  " +
                `${formValuesOProfile.poste}`,
              style: "name",
            },
            {
              text:
                `${formValuesOPersonalInfo.email}` +
                "   -   " +
                `${formValuesOPersonalInfo.phone}` +
                "   -   " +
                `${formValuesOPersonalInfo.adresse}`,
              style: "name2",
            },
          ],
        ],
      },
      {
        columns: [
          {
            text: "Profil",
            style: "Profil",
          },

          {
            text: `${formValuesOProfile.description}`,
            margin: [0, 15, 0, 0],
            width: "80%",
            height: "0%",
          },
        ],
      },
      {
        table: {
          body: [
            [
              {
                text: "",

                border: [false, true, false, false],
                margin: [0, 0, 480, 0],

                alignment: "center",
              },
            ],
          ],
        },
        margin: [0, 20, 0, 0],
      },

      {
        columns: [
          {
            text: "Parcours Académique",
            style: "ParcoursAcadémique",
          },
        ],
      },

      getEducationObject(formValuesOParcourAcademique),

      {
        table: {
          body: [
            [
              {
                text: "",

                border: [false, true, false, false],
                margin: [0, 0, 480, 0],

                alignment: "center",
              },
            ],
          ],
        },
        margin: [0, 20, 0, 0],
      },
      {
        columns: [
          {
            text: "Expériences Professionnelles",
            style: "ExpériencesProfessionnelles",
          },
        ],
      },
      getExperienceObject(formValuesOExperiencesProfessionelles),
    ],
    styles: {
      ParcoursAcadémique: {
        fontSize: 16,
        bold: true,
        color: "black",
        margin: [0, 10, 0, 10],
      },
      ExpériencesProfessionnelles: {
        fontSize: 16,

        bold: true,
        color: "black",
        margin: [0, 10, 0, 10],
      },
      Profil: {
        fontSize: 16,
        bold: true,
        color: "black",
        alignment: "left",
        margin: [0, 10, 0, 20],
      },

      name: {
        fontSize: 18,
        color: "#075985",
        bold: true,
        alignment: "left",
        width: "50%",
        margin: [20, 0, 0, 0],
      },

      name2: { margin: [20, 10, 0, 20] },
    },
  };
};
