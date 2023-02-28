/* eslint-disable array-callback-return */
import moment from "moment";
import { base64OfImage } from "../Component/Base64OfImage";

const getProfilePicObject = () => {
  if (localStorage.getItem("personal_info"))
    console.log(localStorage.getItem("personal_info"));
  localStorage.setItem("personal_info", localStorage.getItem("personal_info"));

  if (JSON.parse(localStorage.getItem("personal_info")).photo !== "") {
    return {
      image: JSON.parse(localStorage.getItem("personal_info") || "").photo,
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

const getEducationObject = () => {
  const exs = [];
  if (localStorage.getItem("education")) {
    console.log(localStorage.getItem("education"));
    localStorage.setItem("education", localStorage.getItem("education"));
    const education = JSON.parse(localStorage.getItem("education")).education;
    education.map((education) => {
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
                moment(education.startDate).format('DD-MM-YYYY') +
                "  -  " +
                moment(education.endDate).format('DD-MM-YYYY'),
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
const getExperienceObject = () => {
  const exs = [];
  if (localStorage.getItem("experience_professionelles")) {
    console.log(localStorage.getItem("experience_professionelles"));
    localStorage.setItem("experience_professionelles", localStorage.getItem("experience_professionelles"));
    const experience_professionelle = JSON.parse(localStorage.getItem("experience_professionelles")).experienceProfessionnelle;
    experience_professionelle.map((experience_professionelle) => {
      exs.push([
        {
          columns: [
            [
              {
                text: experience_professionelle.typeDEmploi,
                margin: [0, 0, 0, 0],
                bold: true,
              },
              {
                text: experience_professionelle.nomDulEntreprise + "  ,  " + experience_professionelle.lieu,
                margin: [0, 3, 0, 0],
                color: "#075985",
              },
              {
                text:experience_professionelle.detail,
                margin: [0, 3, 0, 0],
                
              },

            ],
            {
              text:
                moment(experience_professionelle.startDate).format('DD-MM-YYYY') +
                "  -  " +
                moment(experience_professionelle.endDate).format('DD-MM-YYYY'),
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
export const getDocumentDefinition = () => {
  if (localStorage.getItem("personal_info"))
    console.log(localStorage.getItem("personal_info"));
  localStorage.setItem("personal_info", localStorage.getItem("personal_info"));

  return {
    content: [
      {
        columns: [
          getProfilePicObject(),
          [
            {
              text:
                `${
                  localStorage.getItem("personal_info")
                    ? JSON.parse(localStorage.getItem("personal_info") || "")
                        .nom
                    : ""
                }` +
                " " +
                `${
                  localStorage.getItem("personal_info")
                    ? JSON.parse(localStorage.getItem("personal_info") || "")
                        .prenom
                    : ""
                }` +
                "  ,  " +
                `${
                  localStorage.getItem("about_me")
                    ? JSON.parse(localStorage.getItem("about_me") || "").poste
                    : ""
                }`,
              style: "name",
            },

            {
              text:
                `${
                  localStorage.getItem("personal_info")
                    ? JSON.parse(localStorage.getItem("personal_info") || "")
                        .email
                    : ""
                }` +
                "   -   " +
                `${
                  localStorage.getItem("personal_info")
                    ? JSON.parse(localStorage.getItem("personal_info") || "")
                        .phone
                    : ""
                }` +
                "   -   " +
                `${
                  localStorage.getItem("personal_info")
                    ? JSON.parse(localStorage.getItem("personal_info") || "")
                        .adresse
                    : ""
                }`,
              style: "name2",
            },
          ],
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
            text: "Profil",
            style: "Profil",
          },

          {
            text: `${
              localStorage.getItem("about_me")
                ? JSON.parse(localStorage.getItem("about_me") || "").description
                : ""
            }`,
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

      getEducationObject(),

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
      getExperienceObject(),
    ],
    styles: {
      ParcoursAcadémique: {
        fontSize: 16,
        bold: true,
        color: "black",
        margin: [0, 10, 0, 20],
      },
      ExpériencesProfessionnelles: {
        fontSize: 16,
        bold: true,
        color: "black",
        margin: [0, 10, 0, 20],
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
        color: "#dc2626",
        bold: true,
        alignment: "left",
        width: "50%",
        margin: [20, 0, 0, 0],
      },

      name2: { margin: [20, 10, 0, 20] },
    },
  };
};
